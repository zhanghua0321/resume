const express=require('express');
const bodyParser=require('body-parser');
const pool=require('./pool');

//服务器node.js允许跨域访问配置项
//引入跨域模块
const cors=require("cors");
//配置允许哪个程序跨域访问 脚手架
var app=express();
//注意顺序
app.use(cors({
	origin:[
	"http://127.0.0.1:3001","http://localhost:3001"],
	credentials:true
}))
app.use(express.static(__dirname+'/public'));
app.listen(3000);

//1.学子商城首页轮播图
//图片放到app.js的平级目录下 
app.get("/imagelist",(req,res)=>{
	var obj=[
		{id:1,img_url:"http://127.0.0.1:3000/img/ban1.jpg"},
		{id:2,img_url:"http://127.0.0.1:3000/img/ban2.jpg"},
		{id:3,img_url:"http://127.0.0.1:3000/img/ban3.jpg"},
		{id:4,img_url:"http://127.0.0.1:3000/img/ban4.jpg"}
	];
	res.send(obj)
});
//测试是否出现图片：http://127.0.0.1:3000/imagelist
app.get("/imageurl",(req,res)=>{
	var obj=[
		{id:5,img_url:"http://127.0.0.1:3000/img/shop1.jpg",title:"小米8 青春版",now:"1199.99",old:"1399",q:2},
		{id:6,img_url:"http://127.0.0.1:3000/img/shop2.jpg",title:"小米手环3 NFC版",now:"299.99",old:"509",q:3},
		{id:7,img_url:"http://127.0.0.1:3000/img/shop3.jpg",title:"红米 6A",now:"1099.99",old:"1119",q:4},
		{id:8,img_url:"http://127.0.0.1:3000/img/shop4.jpg",title:"9号平衡车",now:"599.99",old:"1119",q:1}
	];
	res.send(obj)
});

//2.分页显示
app.get("/newslist",(req,res)=>{
	//1.参数  当前页码  页大小（一页显示几行数据）
	var pno=req.query.pno;
	var pageSize=req.query.pageSize;
	//2.sql
	//2.1查找总记录 转换总页数  
	var sql="SELECT count(id) as c FROM xz_news";
	var obj={};//保存发送客户端数据
	var progress=0;//进度
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		var c=Math.ceil(result[0].c/pageSize);
//		console.log(c);
		obj.pageCount=c;
		progress+=50;
		if(progress==100){
			res.send(obj);
		}
	});
	//2.2查找当前页内容  中间五行
	var sql =" SELECT id,title,img_url,ctime,point";
		sql+=" from xz_news";
		sql+=" limit ?,?";
	//计算分页  (pno-1)*pageSize偏移量
	var offset=parseInt((pno-1)*pageSize);
	pageSize=parseInt(pageSize);
	pool.query(sql,[offset,pageSize],(err,result)=>{
		if(err)throw err;		
//		console.log(result);
		obj.data=result;
		progress+=50;
		if(progress==100){
			res.send(obj);
		}
	});
	//3.结果格式
	//res.send({code:"ok"})
	
});
//3.发送给脚手架新闻详细信息
app.get("/newsinfo",(req,res)=>{
	var obj={
		title:"直线降价100元，仅此一次",
		content:"先下手为强哦！"
	};
	res.send(obj);
});
//4.发表评论
const qs=require("querystring");
app.post("/postcomment",(req,res)=>{
	// 为req对象绑定事件data 客户数据发送成功
	//触发事件
	req.on("data",(buf)=>{
		var str=buf.toString();//将参数转为字符串
		var obj=JSON.parse(str);//将字符串转为js对象
		var msg=obj.msg;//msg 评论内容
		var nid=parseInt(obj.nid);//nid 新闻编号
		var sql="insert into xz_comment(content,user_name,ctime,nid) values(?,'匿名',now(),?)";
		pool.query(sql,[msg,nid],(err,result)=>{
			if(err) throw err;
			res.send({code:1,msg:"添加成功"});
		})
	})
})
//http://localhost:3000/newslist?pno=3&pageSize=5
//http://127.0.0.1:3000/img/muwu.jpg
//5.用户获取指定新闻编号所在评论
app.get("/getComment",(req,res)=>{
	//获取指定新闻编号
	var nid=parseInt(req.query.id);
	var pno=req.query.pno;
	var pageSize=req.query.pageSize;
	//2.sql
	//2.1查找总记录 转换总页数  
	var sql=" SELECT count(id) as c FROM xz_comment";
	sql+=" where nid=?";
	var obj={};//保存发送客户端数据
	var progress=0;//进度
	pool.query(sql,[nid],(err,result)=>{
		if(err)throw err;
		var c=Math.ceil(result[0].c/pageSize);
		obj.pageCount=c;
		progress+=50;
		if(progress==100){
			res.send(obj);
		}
	});
	//2.2查找当前页内容  中间五行
	var sql =" SELECT id,content,ctime,user_name";
		sql+=" from xz_comment";
		sql+=" where nid=?";
		sql+=" order by id desc";//默认降序排列 后发的评论在前边
		sql+=" limit ?,?";
	//计算分页  (pno-1)*pageSize偏移量
	var offset=parseInt((pno-1)*pageSize);
	pageSize=parseInt(pageSize);
	pool.query(sql,[nid,offset,pageSize],(err,result)=>{
		if(err)throw err;
		obj.data=result;
		progress+=50;
		if(progress==100){
			res.send(obj);
		}
	});
	//http://127.0.0.1:3000/getComment?id=1&pno=1&pageSize=5  
})
//6.返回商品信息[id,title,now,old,商号]
app.get("/goodsinfo",(req,res)=>{
    	var id=req.query.id;
    	var obj={id:id,title:"小米8 青春版",now:1000.99,old:1999.0,pid:"648"};
	res.send(obj);
});
//7.购物车数据列表
app.get("/shopCart",(req,res)=>{
	var obj=[];
	obj.push({id:1,img_url:"http://127.0.0.1:3000/img/shop1.png",title:"小米8",price:1999,count:2})
	obj.push({id:2,img_url:"http://127.0.0.1:3000/img/shop_2.jpg",title:"红米8A",price:1399,count:3})
	obj.push({id:3,img_url:"http://127.0.0.1:3000/img/shop_3.jpg",title:"黑鲨游戏版",price:2099,count:1})
	res.send(obj);
})
//8.将商品信息添加至购物车
//-INSERT INTO xz_cart VALUES();
app.get("/addCart",(req,res)=>{
	//1.参数  商品id 商品数量
//	获取参数
	var pid=req.query.pid;
	var count=req.query.count;
//	创建正则表达式验证
	var reg=/^[0-9]{1,}$/;
	if(!reg.test(pid)){
		res.send({code:-1,msg:"商品编号参数有误"});
		return;
	}
	if(!reg.test(count)){
		res.send({code:-2,msg:"商品数量参数有误"});
		return;
	}
//	所有用户都需要验证
 //	2.连接数据库
//	3.返回成功值
	res.send({code:1,msg:"添加成功"});
})

//8.用户登录
//h5
app.get("/login",(req,res)=>{
  //1:参数 2 uname upwd
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  //2:正则表达式验证 
  //3:sql 
  var sql = " SELECT count(id) as c FROM xz_user1";
      sql +=" WHERE uname=? AND upwd = md5(?)";
  pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        if(result[0].c==0){
          res.send({code:-1,msg:"手机号或密码错误"});
        }else{
          res.send({code:1,msg:"登录成功"});
        }
  })
});
//测试：http://localhost:3000/login?uname=dd&upwd=123

//9.用户注册
//app.get("/regeister",(req,res)=>{
//	var uname=
//})
