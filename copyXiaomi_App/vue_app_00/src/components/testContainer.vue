<template>
	<div class="app-testContainer">
		<h1>testContainer.vue</h1>		
		<h1>生命周期</h1>
		<input type="button" value="修改"/>
		<p id="h3">{{msg}}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{msg:"脚手架"}
		},
		methods:{
			show(){
				
			}
		},
		beforeCreate(){
			
		},
		created(){
			this.show();
			console.log(this.msg);
		},
	}
</script>

<style>
</style>