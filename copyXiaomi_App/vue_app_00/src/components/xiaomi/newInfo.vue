<template>
	<div class="app-newinfo">
		<h3>{{info.title}}</h3>
		<div>{{info.content}}</div>
		<comment-box :id="this.id"></comment-box>
	</div>
</template>

<script>
	import comment from "../sub/comment.vue"
	export default{
		data(){
			return{info:{},id:this.$route.query.id}
		},
		created(){
//			console.log(this.$route.query.id);
			this.getNewsInfo();
		},
		methods:{
			getNewsInfo(){
				var url="http://127.0.0.1:3000/newsinfo";
				this.$http.get(url).then(result=>{
					this.info=result.body;
				})
			}
		},components:{
			"comment-box":comment
		}
	}
</script>

<style>
</style>