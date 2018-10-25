const express=require('express');
const session = require('express-session');
const bodyParser=require('body-parser');
//导入的路由器
const user=require('./routes/user');
const index=require("./routes/index");
const details=require("./routes/details");
const products=require("./routes/products");
//导入用户的路由
const users=require("./routes/users");
const cart=require("./routes/cart");

const mysql=require('mysql');
//构建web服务器
var app=express();
app.listen(3000);
//托管静态资源
app.use(express.static('./public'));
//使用中间件
app.use(bodyParser.urlencoded({
	extended: false
}));
//使用session
app.use(session({
  secret: '128位随机字符串',
  resave: false,
  saveUninitialized: true,
}))
//挂载路由
app.use('/user',user);
//挂载用户路由
app.use("/index",index);
app.use("/details",details);
app.use("/products",products);
app.use("/users",users);
app.use("/cart",cart);

