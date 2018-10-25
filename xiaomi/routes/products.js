const express=require('express');
//导入数据库连接模块
const pool=require('../pool.js');
//创建路由器
var router=express.Router();
//路由
//1.商品列表
router.get('/list',(req,res)=>{
  //获取请求的数据
  var obj=req.query;
  var $page=parseInt(obj.page);
  var $size=parseInt(obj.size);
  //设置默认值
  if(!$page){
    $page=1;//页码默认是第一页
  }
  if(!$size){
    $page=10;
  }
  //构建sql语句
  var sql='SELECT * FROM xz_laptop LIMIT ?,?';
  //执行sql语句
  pool.query(sql,[($page-1)*$size,$size],(err,result)=>{
    if(err) throw err;
	//把查询的结果发给客户端
    res.send(result);
  });
});
//2.检索商品
router.get('/detail',(req,res)=>{
  //获取浏览器发送的数据
  var obj=req.query;
  //为空的验证
  var $lid=obj.lid;
  if(!$lid){
    res.send({code:401,msg:'lid required'});
	return;
  }
  //构建sql语句
  var sql='SELECT*FROM xz_laptop WHERE lid=?';
  //执行sql语句
  pool.query(sql,[$lid],(err,result)=>{
    if(err) throw err;
    //如果返回的数组长度大于0,
	if(result.length>0){
	  res.send(result[0]);
	}else{
	  res.send({code:301,msg:'select error'});
	}
  });
});
//3.删除商品
router.get('/delete',(req,res)=>{
  //获取浏览器请求的数据
  var obj=req.query;
  //验证为空
  var $lid=obj.lid;
  if(!$lid){
    res.send({code:401,msg:'lid required'});
	return;
  }
  //构建sql语句
  var sql='DELETE FROM xz_laptop WHERE lid=?';
  //执行sql语句
  pool.query(sql,[$lid],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
	  res.send({code:200,msg:'delete success'});
	}else{
	  res.send({code:301,msg:'delete error'});
	}
  });
});
//4.添加商品
router.post('/add',(req,res)=>{
  //获取浏览器发送的数据
  var obj=req.body;
  //console.log(obj);
  //对多组表单验证
  var i=401;
  for(var key in obj){
     //获取数组中每个属性对应的值
	 if(!obj[key]){
	   res.send({code:i,msg:key+' required'});
	   return;
	 }
	 i++;
  }
});
//5.修改商品


//路由器导出
module.exports=router;