<template>
	<div class="app-shopcar">
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<!--轮播子组件-->
					<!--3.调用子组件-->
					<swiper-box :list="imglist"></swiper-box>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-header">商品列表</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in cartList" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis' style="color: red;margin-top: 10px;">
								<span class="price">￥{{item.price}}</span>
								<span class="count">
								<div class="mui-numbox" data-numbox-min='1' data-numbox-max='9' style="margin-left:70px;margin-bottom:10px;">
									<button class="mui-btn mui-btn-numbox-minus" type="button" @click="cartSub(item.id)">-</button>
									<input id="test" class="mui-input-numbox" type="number" :value="item.count">
									<button class="mui-btn mui-btn-numbox-plus" type="button" @click="cartAdd(item.id)">+</button>
								</div>
							</span>
							</p>
						</div>
					</a>
				</li>
				</ul>
				<div style="color: red;font-size: 15px;font-weight: bold;">合计：￥{{getSubTotal}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import swiper from "../sub/swiper.vue"
	export default{
		data(){
			return{
				imglist:[],
				cartList:[],//购物车列表
//				id:this.$route.query.id
			}
		},
		created(){
			this.getImageList();
			this.getCartList();
			
//			console.log(this.$route.params.id);
		},
		methods:{
			getCartList(){
				this.$http.get("shopCart").then(result=>{
					this.cartList=result.body
				})
			},
			getImageList(){
				this.$http.get("imagelist").then(result=>{
					this.imglist=result.body;
				})
			},
			cartAdd(id){
//				1.获取数组中的每个元素
				for(var item of this.cartList){
					//2.判断参数中的id与当前元素的id是否相同
					if(item.id==id){
					//3.当前元素数量+1
						item.count++;
						break;
					}
				}
			},
			cartSub(id){
				//1.获取数组中的每个元素
				for(var item of this.cartList){
					//2.判断参数中的id与当前元素的id是否相同
					if(item.id==id){
						if(item.count<2)
							return;
						//3.当前元素数量+1
						item.count--;
						break;
					}
				}
			}
		},
		components:{
			"swiper-box":swiper
		},
		computed:{
			//计算属性
			getSubTotal:function(){
				//计算商品累加和并返回
				//1.创建临时变量
				var sum=0; 
				//2.创建循环
				for(var item of this.cartList){
				//3.计算累加和
				sum+=item.price*item.count;
				//4.返回累加结果
				}
				return sum;
			}
		}
	}
</script>

<style>
	#number_box{
		margin-right: 200px;
	}
</style>