const express=require('express');
//引入mysql连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();
//添加路由
//1.用户注册
router.post('/register',(req,res)=>{
	//浏览器发送的数据
	//console.log(req.body);//cmd下有信息
	//res.send('注册成功');//点提交会显示的信息
	var obj=req.body;	
	var $uname=obj.uname;
	if(!$uname){
		res.send("用户名不能为空");
		return;
	}
	res.send('注册成功');
	
	var $upwd=obj.upwd;
	if(!$upwd){
		res.send("用户密码不能为空！");
		return;
	}
	var $cpwd=obj.cpwd;
	if(!$cpwd){
		res.send("请输入和上方一样的密码！");
		return;
	}
	var $phone=obj.phone;
	if(!$phone){
		res.send("请留下您的联系方式！");
		return;
	}
	var $email=obj.email;
	if(!$email){
		res.send({code:403,msg:''});
	}
	
	var sql="insert into xiaomi_user values(null,?,?,null,?,null,null,null)";
	pool.query(sql,[$uname,$upwd,$email,$phone],(err,result)=>{
		if(err) throw err;
		res.send("注册成功！");
	});	
});

//2.登录功能
//router.post('/login',(req,res)=>{
//	var $uname=rep.body.uname;
//	var $upwd=req.body.upwd;
//	if(!$uname){
//		res.send({code:311,mag:'用户名不能为空！'});
//		return;
//	}
//	if(!$upwd){
//		res.send({code:312,mag:'用户密码不能为空'});
//		return;
//	}
//	var sql="select * from xiaomi_user where uname=? and upwd=? ";
//	pool.query(sql.[$uname,$upwd],(err,result)=>{
//		if(err) throw err;
//		if(result.length>0){
//			res.send("登录成功");
//		}else{
//			res,send("登录失败");
//		}
//	});
//});



module.exports=router;