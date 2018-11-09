<template>
	<div class="app-info">
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<!--轮播子组件-->
					<!--3.调用子组件-->
					<swiper-box :list="imglist"></swiper-box>
				</div>
			</div>
			
		</div>
		<!--商品购买区域-->
		<div class="mui-card">
			<div class="mui-card-header">{{info.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<!--商品购买-->
					<p class="price" style="margin-top: 25px;">
						市场价：<del>￥{{info.old}}</del>&nbsp;&nbsp;
						销售价：<span class="now">￥{{info.now}}</span>
					</p>
					<p style="margin-top: 15px;">
						购买数量：
						<div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
							<button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub">-</button>
							<input id="test" class="mui-input-numbox" type="number" value="1" v-model="val">
							<button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd">+</button>
						</div>
					</p>
					<p>
						<mt-button type="primary" size="small" style="margin-right: 150px;margin-top: 20px;">立即购买</mt-button>
						<mt-button type="danger" size="small" style="margin-top: 20px;" @click="addCartTo">加入购物车</mt-button>
					</p>
				</div>
			</div>
		</div>
		<!--商品参数区域-->
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<!--商品参数-->
					<p>商品货号：{{info.pid}}</p>
					<p>商品颜色：星耀黑</p>
					<p>商品运费：￥0</p>
				</div>
			</div>
			<div class="mui-card-footer"></div>
		</div>
	</div>
</template>

<script>
		import {Toast} from "mint-ui";
//	1.引用轮播图子组件
	import swiper from "../sub/swiper.vue"
//	引入muijs实现商品数量的加减
//	import mui from "../../lib/mui/js/mui.js";
	
	export default{
		data(){
			return{
				imglist:[],
				val:1,
				info:{},
//				id:this.$route.query.id
			}
		},
		created(){
			this.getImageList();
			this.getGoodInfo();
			console.log(this.$route.params.id);
			
		},
		methods:{
			addCartTo(){
				//1.将商品编号和数量保存到服务器
				//获取编号
				var id=this.$route.params.id;
//				console.log(id)
				//获取数量
				var count=this.val;
//				console.log(count)
				//发送请求
				this.$http.get("addCart?pid="+id+"&count="+count).then(result=>{
					if(result.body.code==1){
						this.$store.commit("increment",count);
						//刷新数据会丢失
						Toast(result.body.msg);
					}else{
						Toast(result.body.msg);
					}
				});
				//2.更新底部购物车数量
				
			},
			getImageList(){
				this.$http.get("imagelist").then(result=>{
					this.imglist=result.body;
				})
			},
			goodAdd(){
				if(this.val<9)
					this.val++;
			},
			goodSub(){
				if(this.val>1)
					this.val--;
				
			},
//			服务器数据：返回模拟数据[id;title,now.old,商号]
//			发送给服务器参数:商品id
			getGoodInfo(){	
//				将商品列表将商品id传递给商品详情
				var id=this.$route.params.id;
				this.$http.get("goodsinfo?id="+id).then(result=>{
					this.info=result.body;
					console.log(this.info);
				})
			}
		},components:{
//			2.注册子组件
			"swiper-box":swiper
		}
		
	}
</script>

<style>
	.now{
		color: red;
		font-weight: bold;
		
	}
</style>