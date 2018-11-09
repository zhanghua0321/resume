<template>
	<div class="app-comment">
		
		<hr />
		<!--<h1>评论子组件</h1>-->
		<h1>评论</h1>
		<!--发表评论的区域-->
		<textarea maxlength="120" placeholder="请吐槽，最多120个字..." style="font-size: 10px;" v-model="msg"></textarea>
		<mt-button size="large" @click="postComment">发表评论</mt-button>
		<!--显示评论的区域-->
		<div class="cmt-list">
			<div class="cmt-item" v-for="(item,i) in list" :key="item.id">
				<div class="cmt-info">
					<span>{{i+1}}楼：{{item.user_name}}</span><br />
					<span style="font-size: 12px;">发表时间：{{item.ctime | datetimeFilter}}</span>
				</div>
				<div class="cmt-body">
					{{item.content}}
					
					
				</div>
			</div>
		</div>
		<mt-button size="large" @click="getMore">加载更多</mt-button>
		
	</div>
</template>

<script>
	//单独引入Toast组件
	import {Toast} from "mint-ui"
	export default{
		data(){
			return {
				msg:"",    //双向绑定用户评论
				pageIndex:0,//当前页码
				pageSize:5,//页大小
				list:[]//分页数据
			}
		},
		methods:{
			getMore(){
				//1.页码自增
				this.pageIndex++;
				//2:发送请求
				var p=this.pageIndex;//页码
				var s=this.pageSize;//页大小
				var id=this.id;//新闻编号
				var url="getComment?id="+id+"&pno="+p+"&pageSize="+s;
//				var url="http://127.0.0.1:3000/getComment";
//				url+="?pno="+this.pageIndex+"&pageSize="+this.pageSize;
//				console.log(p+":"+s+":"+id)
				//3.参数 id pno pageSize
				this.$http.get(url).then(result=>{
					console.log(result);
					var row=this.list.concat(result.body.data);
					this.list=row;
				})
				//4.获取返回数据
				//5.显示模板中
			},
			postComment(){
				//1.获取新闻编号
//				this.nid=result.body;
				var nid=this.id;
				//2.获取评论内容
				var pmsg=this.msg;
				//3.判断新闻评论内容不能为空
				if(pmsg.trim().length==0){
					Toast("评论内容不能为空！")
					return;
				}
				//4.发送post请求
				var url="http://127.0.0.1:3000/postcomment";
				this.$http.post(url,{nid:nid,msg:pmsg}).then(result=>{					
					Toast("评论成功！")
					this.pageIndex=0;
					this.list=[];
					this.getMore();
				})
				//5.获取服务器程序返回
				//6.提示用户“评论成功”
			//console.log(123);	
			},
			
		},
		created(){
				this.getMore();
			},
		props:["id"]
	}
</script>

<style>
	.app-comment h1{
		margin-top: 25px;
		font-size: 14px;
	}
	.app-comment textarea{
		font-size: 14px;
		height: 85px;
		margin: 0;
	}
	.app-comment .cmt-list{
		margin: 5px 0;
		margin-bottom: 10px;
	}
	.app-comment .cmt-list .cmt-info{
		line-height: 30px;
		background: gainsboro;
		justify-content: ;
	}
	.app-comment .cmt-list .cmt-body{
		line-height: 35px;
		text-indent: 2em;
		background: whitesmoke;
		font-size: 13px;
	}
</style>