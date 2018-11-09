const mysql=require('mysql');
var pool=mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'',
	port:'3306',
	database:'xz',
	connectionLimit:20//活动连接数量
});
module.exports=pool;
