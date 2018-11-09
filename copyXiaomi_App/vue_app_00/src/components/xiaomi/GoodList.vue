<template>
	<div class="app-goodslist">
		<div class="goods-item" v-for="item in list1" :key="item.id">
			<img :src="item.img_url" @click.stop.prevent="getDetail(item.id)" >
			<h4 class="title">{{item.title}}</h4>
			<div class="info">
				<p class="price">
					<span class="now">￥{{item.now}}</span>
					<span class="old">￥{{item.old}}</span>
				</p>
				<p class="sell">
					<span>库存：&nbsp;&nbsp;{{item.q}}</span>
				</p>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list1:[]
			}
		},
		methods:{
			getDetail(id){
				this.$router.push("/xiaomiHome/goodsinfo/"+id);
			},
			getImg(){
				var url="http://127.0.0.1:3000/imageurl";
				this.$http.get(url).then(result=>{
					this.list1=result.body;
				})
			}
		},
		created(){
			this.getImg();
		}
		
	}
</script>

<style>
	.app-goodslist{
		display: flex;
		flex-wrap: wrap;/*//子元素换行*/
		justify-content: space-between;
		padding: 7px;
	}
	.app-goodslist .goods-item{
		width: 49%;
		border: 1px solid #ccc;
		box-shadow: 0 0 8px #ccc;
		margin: 4px 0;
		padding: 2px;
		/*弹性布局*/
		display: flex; 
		/*垂直布局*/        
		flex-direction: column;
		/*两端布局*/
		justify-content: space-between;
		/*最小高度*/
		min-height: 263px;
	}
	.app-goodslist .goods-item img{
		width: 100%;
	}
	.title{
		margin-top: -70px;
		margin-left: 20px;
	}
	.price{
		margin-top: -90px;
		margin-left: 8px;
	}
	.sell{
		margin-left: 20px;
		color: black;
	}
</style>