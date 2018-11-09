<template>
	<div class="app-login">
		<div class="row1">
			<img src="../img/login.png" id="logo">
		</div>
		<h4>小米账号登陆</h4>
		<form action="#">
			<input type="text" id="uname" v-model="unameval" placeholder="+86 > 手机号码">
			<input type="password" id="upwd" v-model="upwdval" placeholder="密码">			
			<input type="button" id="btn1" value="立即登录/注册" @click="btnSubmit1"><br />
			<input type="button" id="btn2" value="用户名密码登陆">
		</form>
		<div class="qita">
			<span class="line"></span>
			<span class="txt">其它方式登录</span>
			<span class="line"></span>
		</div>
		<div class="dlfs">
				<img src="../img/zfb.png"/>
				<img src="../img/weibo.png">
		</div>
	</div>
</template>

<script>
	import {Toast} from "mint-ui";
	export default{
		data(){
			return{
				unameval:"",
				upwdval:""
			}
		},
		methods:{
			btnSubmit1(){
				var u=this.unameval;
				var p=this.upwdval;
				this.$http.get("login?uname="+u+"&upwd="+p).then(result=>{
					if(result.body.code==1){
						Toast(result.body.msg);
						this.$router.push("/");
					}else{
						Toast(result.body.msg)
					}
				})
			},
		}
	}
</script>

<style>
	.row1{
		margin: 50px 100px 5px 150px;
	}
	h4{
		text-align: center;
	}
	#uname{
		border: 0;
		border-bottom: 1px solid gainsboro;
		background: #efeff4;
		margin: 10px 10px 0 10px;
		width: 95%;
		font-size: 15px;
	}
	#upwd{
		border: 0;
		border-bottom: 1px solid gainsboro;
		background: #efeff4;
		font-size: 15px;
		margin: 1px 10px 30px 10px;
		width: 95%;
	}
	#btn1{
		width: 90%;
		margin-left: 5%;
		height: 40px;
		background: #f2701a;
		border-radius: 6px;
		border: 0;
		color: white;
		font-size: 18px;
	}
	#btn2{
		width: 90%;
		margin-left: 5%;
		height: 40px;
		border-radius: 6px;
		border: 1px solid gainsboro;
		font-size: 18px;
		margin-top: 30px;
	}
	.qita{
		margin-top: 60px;
		
	}
	.line{
		display: inline-block;
		width: 135px;
		border-top: 1px solid gainsboro;
		margin-left: 5px;
	}
	.txt{
		color: gray;
		vertical-align: -5px;
		font-size: 13px;
		margin: 0 5px 0 5px;
		color: gray;
		text-align: center;
	}
	.dlfs{
		text-align: center;
	}
	.dlfs img{
		margin-left: 10px;
		margin-top: 20px;
	}
	
	#upwd1{
		border: 0;
		border-bottom: 1px solid gainsboro;
		background: #efeff4;
		font-size: 15px;
		margin: 1px 10px 0 20px;
		width: 95%;
		margin-bottom: 5px;
		padding-bottom: 10px;
	}
	.dx{
		position: relative;
		padding: 0;
		margin: 0;
		padding-bottom: 10px;
	}
	.yzm{
		color: cornflowerblue;
		margin: 0;
		padding: 0;
		position: absolute;
		top: -1px;
		left: 285px;
		margin-bottom: 5px;
	}
</style>