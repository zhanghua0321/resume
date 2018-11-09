<template>
	<div class="app-home">
		<header class="my_header">
			<img class="logo-img" src="../img/xiaomilogo.png"/>
			<input id="my_input" type="text" placeholder="搜索">
			<img class="my_search" src="../img/search.png">
			<router-link :to="'/home/login'"><img class="my_user" src="../img/user.png"></router-link>
		</header>
		<nav class="my_nav" id="fixed1">
			<ul class="my_ul">
				<li class="my_li1"><a class="my_a1" href="">推荐</a></li>
				<li class="my_li"><a class="my_a" href="">手机</a></li>
				<li class="my_li"><a class="my_a" href="">智能</a></li>
				<li class="my_li"><a class="my_a" href="">电视</a></li>
				<li class="my_li"><a class="my_a" href="">笔记本</a></li>
				<li class="my_li"><a class="my_a" href="">家电</a></li>
				<li class="my_li"><a class="my_a" href="">影音</a></li>
				<img src="../img/sanjiao.png" style="width: 4%;height: 4%;margin-top: 5px;">
			</ul>
		</nav>
			<!--<mt-search :value.sync="value" cancel-text="取消" placeholder="搜索"></mt-search>-->
		<mt-swipe :auto="2000">
			<mt-swipe-item v-for="item in list" :key="item.id">
				<img :src="item.img_url">
			</mt-swipe-item>
		</mt-swipe>
		<div class="my_card">
			<router-link :to="'/xiaomiHome/newsList'"><img src="../img/bol.png"></router-link>
			<a @click.stop.prevent="jumpShop()"><img src="../img/time.png"></a>
			<img src="../img/load.png">
			<img src="../img/card.png">
			<router-link to="/xiaomiHome/photo"><img src="../img/huangguan.png"></router-link>
			<div class="my_word">
				<router-link :to="'/xiaomiHome/newsList'">活动频道</router-link>
				<a @click.stop.prevent="jumpShop()">小米闪购</a>
				<a>以旧换新</a>
				<a>米粉卡</a>
				<a>新品发布</a>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="box1">
						<div class="left1">
							<img src="../img/left.jpg" alt="" />
						</div>
						<div class="right2">
							<div class="right1_1">
								<img src="../img/down.jpg"/>
							</div>
							<div class="right1_2">
								<img src="../img/three.jpg"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row_1"><img src="../img/row1.jpg" alt="" /></div>
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="left2">
						<img src="../../img/row1_1.jpg" alt="" />
					</div>
					<div class="box2">
						
						<div class="right2_1">
							<img src="../../img/phone1.png"/>
						</div>
						<div class="right2_2">
							<img src="../../img/phone2.png"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row_2"><img src="../img/row2.jpg"/></div>
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="left3">
						<img src="../../img/TV2.jpg">
						<img src="../../img/TV1.jpg">
					</div>
					<div class="left4">
						<img src="../../img/TV3.jpg">
						<img src="../../img/TV4.jpg">
					</div>
					
				</div>
			</div>
		</div>
		<div class="row_3"><img src="../img/row4.jpg"/></div>
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div id="wu_1">
						<img src="../../img/wu1.png">
						<img src="../../img/wu2.png">
						<img src="../../img/wu3.jpg">
						<img src="../../img/wu4.jpg">
					</div>                      
					<div id="wu_2">          
						<img src="../../img/wu5.png">
						<img src="../../img/wu6.jpg">
						<img src="../../img/wu6.jpg">
						<img src="../../img/wu8.jpg">
					</div>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<img src="../img/banner5.jpg">
				</div>
			</div>
			<div class="mui-card-footer"><a id="footer">了解小米</a></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:[]
			}
		},
		methods:{
			jquery(){
//				window.onscroll=function(){
//					var scrollTop=document.documentElement.scrollTop;
//					if(scrollTop>=8){
//						fixed1.style.position="fixed";
//						fixed1.style.top="0";
//					}else{
//				      fixed1.style.position="relative";
//					}
//				}
			},
			jumpShop(){
//				this.$route.push("/xiaomiHome/shop?id=15");
				this.$router.push("/xiaomiHome/goodslist");
			},
			getImage(){
//				发送ajax请求并且获取图片列表并且显示
				var url="http://127.0.0.1:3000/imagelist";
				this.$http.get(url).then(result=>{
//					console.log(result.body);
//					获取返回数据，保存list属性中
					this.list=result.body;
				})
			}
		},
		created(){
			this.getImage();
			this.jquery();
		}
	}
</script>
<style link=""></style>
<style>
	.logo-img{
		position: absolute;
		top: 16px;
		left: 10px;
		z-index: 3;
	}
	/*.app-home .mt-search{
		height: 30px;
	}*/
	.app-home .mint-swipe{
		height: 150px;
		margin-top: 63px;
	}
	.app-home .mint-swipe img{
		width: 100%;
	}
	/*调整六宫格*/
	.mui-table-view.mui-grid-view.mui-grid-9{
		background:#fff;
		border: 0;		
	}
	.app-home .mui-grid-view.mui-grid-9 img{
		width: 40px;
		height: 40px;
	}
	.app-home .mui-table-view.mui-grid-view.mui-table-cell .mui-media-body{
		font-size: 10px;
	}
	.my_nav{
		position: fixed;
		top: 50px;
		width: 100%;
		margin-top: 20px;
		padding: 0;
		margin: 0;
		background: #f7f6f6;
	}
	#fixed1{
		z-index: 1000;
	}
	.my_ul{
		list-style: none;
		display: flex;
		padding: 0;
		margin: 0;
		margin-bottom: 20px;
		margin-top: 20px;
		margin-left: 13px;
	}
	.my_a{
		color: gray;
		font-size: 13px;
		margin: 0;
		padding: 0;
	}
	.my_a1{
		color: orangered;
		display: block;
		padding: 20px;		
		font-size: 15px;
		padding-bottom: 10px;
		margin: 0;
		padding: 0;
	}
	.my_li1{
		padding-bottom: 10px;
		border-bottom: 1.5px solid orangered;
		margin-right: 20px;
	}
	.my_li{
		margin-right: 20px;
	}
	.my_li:hover{
		border-bottom: 2px solid orangered;
	}
	/*头部*/
	.my_header{
		position: fixed;
		top: 0;
		height: 10px;
		z-index: 10;
		background: white;
		width: 100%;
		height: 50px;
	}
	#my_input{
		z-index: 10;
		position: relative;
		display: block;
		width: 258px;
		height: 30px;
		top: 10px;
		left: 50px;
		right: 10px;
		border: 0;
		font-size: 13px;
		color: grey;
		border: 1px solid lightgray;
	}
	.my_search{
		position: absolute;
		left: 280px;
		top: 16px;
		z-index: 20;
	}
	.my_user{
		z-index: 30;
		position: fixed;
		left: 325px;
		top: 9px;
	}
	.my_card{
		background: white;
		margin-top: -10px;
		margin-bottom: 10px;
	}
	.my_card img{
		margin-top: 8px;
		margin-left: 15px;
		margin-right: 10px;
		
	}
	.my_word{
		margin-top: 2px;
		margin-bottom: 13px;
	}
	.my_word a{
		color: darkgray;
		font-size: 8px;
		margin-left: 13px;
		margin-right: 15px;
	}
	/*主体*/
	.my_body{
		background: white;
		/*width: 300px;*/
		margin: 0;
		padding: 0;
	}
	.my_left{
		width: 183px;
	}
	.my_left img{
		width: 100%;
		margin-right: 3px;
	}
	.my_right{
		width: 186px;
		margin: 0;
		padding: 0;
		position: relative;
	}
	.my_up{
		width: 186px;
		margin: 0;
		padding: 0;
		position: absolute;
		top: -497px;
		left: 189px;
	}
	.my_down{
		width: 186px;
		margin: 0;
		padding: 0;
		position: absolute;
		top: -397px;
		left: 189px;
	}
	.my_up img{
		width: 100%;
		
	}
	.my_down img{
		width: 100%;
	}
	/*主体*/
	.left1 img{
		width: 100%;
		margin-left: -5px;
	}
	.right1_1 img{
		width: 100%;
		margin-left: 5px;
		margin-top: -5px;
	}
	.right1_2 img{
		width: 100%;
		margin-left: 5px;
	}
	.box1{
		display: flex;
	}
	.row_1 img{
		width: 97%;
		margin-left: 5px;
		margin-right: 5px;
	}
	.left2 img{
		width: 100%;
	}
	.right2_1 img{
		width: 100%;
	}
	.right2_2 img{
		width: 100%;
	}
	.box2{
		display: flex;
	}
	.row_2 img{
		width: 97%;
		margin: 0 5px 0 5px;
	}
	.row_3 img{
		width: 97%;
		margin: 0 5px 0 5px;
	}
	.left3 img{
		width: 50%;
	}
	.left4 img{
		width: 50%;
	}
	
	#wu_1 img{
		width: 25%;
	}
	#wu_2 img{
		width: 25%;
	}
	.mui-card-content-inner img{
		width: 100%;
	}
	#footer{
		font-size: 18px;
		text-align: center;
		color: gray;
		margin-left: 40%;
	}
</style>
