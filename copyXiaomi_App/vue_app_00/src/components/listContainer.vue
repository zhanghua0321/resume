<template>
	
	<div id="app-list">
		<h1>用户列表</h1>
		<table>
			<tr>
				<td>编号</td>
				<td>姓名</td>
				<td>年龄</td>
			</tr>
			<tr v-for="item in list">
				<td>{{item.id}}</td>
				<td>{{item.name}}</td>
				<td>{{item.age}}</td> 
				
			</tr>
		</table>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{id:1,name:"dongdong",age:24},
					{id:2,name:"wenhua",age:21},
					{id:3,name:"luyc",age:32},
					{id:4,name:"tom",age:41}
				]
			}
		}
	}
</script>

<style>
	table tr td{
		display: block;
		float: left;
		margin-right: 60px;
		width: 100px;
		height: 50px;
	}
</style>