const express=require('express');
var router=express.Router();

var pool=require('../pool.js');

//1.响应输出"这是我的第一个ajax程序！"
router.get('/ajaxDemo',(req,res)=>{
   res.send('这是我的第一个ajax程序！');
});

//2.响应输出"这是我的第一个ajax练习！"
router.get('/ajaxExer',(req,res)=>{
  res.send("这是我的第一个ajax练习！");
});


//3.用get方法提交用户名和密码
router.get('/login',(req,res)=>{
  //获取前端提交过来的用户名和密码
   var $uname=req.query.uname;
   var $upwd=req.query.upwd;
   if(!$uname){
      res.send('uname is not found');
	  return;
   }
   if(!$upwd){
     res.send('upwd is not found');
	 return;
   }
   res.send('用户名称：'+$uname+'用户密码：'+$upwd);
});


//4.用post方法提交用户名和密码
router.post('/postLogin',(req,res)=>{
  //获取前端提交过来的用户名和密码
   var $uname=req.body.user_name;
   var $upwd=req.body.upwd;
   if(!$uname){
      res.send('uname is not found');
	  return;
   }
   if(!$upwd){
     res.send('upwd is not found');
	 return;
   }
   res.send('用户名称：'+$uname+'用户密码：'+$upwd);
});


//5.用get方法：查询用户表所有数据
router.get('/list',(req,res)=>{
  var sql="select * from xz_user";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
	res.send(result);
  });
});



module.exports=router;    

