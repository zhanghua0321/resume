const express=require("express")
const router=express.Router()
const pool=require("../pool")

//购物车
router.get("/add",(req,res)=>{
	//从服务端获取 lid 和 count
	var lid=req.query.lid;
	var count=req.query.count;
	//从cookie获取uid
	var uid=req.session.uid;	
	console.log(uid,lid,count);
	pool.query("select * from xiaomi_shoppingcart_item where user_id=? and product_id=?",[uid,lid],(err,result)=>{
        if(err) console.log(err);
      	  if(result.length==0){//没买过 执行insert =0  添加购物车
			pool.query("insert into xiaomi_shoppingcart_item values(null,?,?,?,0)",[uid,lid,count],(err,result)=>{
			   if(err)
			     console.log(err);
			     res.end();
			})
		  }else{//买过 ！=0 执行update  添加商品件数
             pool.query("update xiaomi_shoppingcart_item set count=count+? where user_id=? and product_id=?",[count,uid,lid,],(err,result)=>{
            	if(err) console.log(err);
                res.end();
             })
          }
    })
} )

//http://localhost:3000/users/signin?uname=dingding&upwd=123456
//http://localhost:3000/cart/items
router.get("/items",(req,res)=>{
	var uid=req.session.uid;
	var sql=`SELECT *,(SELECT md FROM xiaomi_phone_pic WHERE phone_id=product_id 
		LIMIT 1)as md FROM xiaomi_shoppingcart_item INNER JOIN xiaomi_phone on 
		product_id=lid WHERE user_id=?`;
	pool.query(sql,[uid],(err,result)=>{
		if(err) 
		  console.log(err);
		  res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
		  res.write(JSON.stringify(result))
		  res.end();
	})
		
})

//http://localhost:3000/users/signin?uname=dingding&upwd=123456
//http://localhost:3000/cart/update?lid=35&count=新数量
//修改数量  购物车的+ - 需要先去服务器的数据库去查找再响应给服务端
//iid count
router.get("/update",(req,res)=>{
	var iid=req.query.iid;
	var count=req.query.count;
	//如果count>0 才修改   如果count=0 执行删除
	if(count>0){
		var sql="update xiaomi_shoppingcart_item set count=? where iid=?";
		var data=[count,iid];	
	}else{//否则   执行删除
		var sql="delete xiaomi_shoppingcart_item where iid=?";
		var data=[iid];
	}
	pool.query(sql,data,(err,result)=>{
		if(err)
		  console.log(err);
		  res.end();
	})	
})

module.exports=router;
