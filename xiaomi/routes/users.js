const express=require("express")
const router=express.Router()
const pool=require("../pool")

//判断登录是否成功
router.post("/signin",(req,res)=>{
	var uname=req.body.uname;
	var upwd=req.body.upwd;
	console.log(uname,upwd);
	pool.query(
		"select * from xiaomi_user where uname=? and upwd=?",[uname,upwd],(err,result)=>{
			if(err)
			  console.log(err);
			  res.writeHead(200,{
      			"Content-Type":"application/json;charset=utf-8",
        		"Access-Control-Allow-Origin":"*"
      		  })
			if(result.length>0){
				var user=result[0]  //返回的第一个
				//req.session["uid"]=user["uid"]
				//console.log(req.session["uid"]);
				req.session.uid=user.uid
				res.write(JSON.stringify({
					ok:1,
					msg:"登录成功！"
				}))
			}else{
				res.write(JSON.stringify({
					ok:0,
					msg:"uname or upwd is err!"
				}))				
			}
			res.end();
		}		
	)
})

//判断是否登录过
router.get("/islogin",(req,res)=>{
	res.writeHead(200,{
      	"Content-Type":"application/json;charset=utf-8",
        "Access-Control-Allow-Origin":"*"
    })
	if(req.session.uid===undefined){
		res.write(JSON.stringify({
			ok:0,
			msg:"user is not exist!"
		}))
		res.end();
	}else{
  		var uid=req.session.uid;
  		var sql="select * from xiaomi_user where uid=?"
  		pool.query(sql,[uid],(err,result)=>{
  			if(err){
  				console.log(err);
  			}
  		var user=result[0];
  		res.write(JSON.stringify({ok:1,uname:user.uname}))
  		res.end()
  	})   
  }
})

//销毁session数据
router.get("/signout",(req,res)=>{
	res.writeHead(200,{
      	"Content-Type":"application/json;charset=utf-8",
        "Access-Control-Allow-Origin":"*"
    })
	req.session["uid"]=undefined;
	res.write(JSON.stringify({
		ok:0,
		msg:"user massage already delete!"
	}))
	res.end()
})
module.exports=router;
