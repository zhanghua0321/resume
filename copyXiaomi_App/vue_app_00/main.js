import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'

Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别

//大部分都需要使用的css  就导入在main。js
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

//引入组件mintui库Header
//1.引入指定组件
import {Header,Swipe,SwipeItem} from "mint-ui";
import {Search} from "mint-ui";
import { Range } from 'mint-ui';
import {Button} from "mint-ui";
import {Tabbar,TabItem} from"mint-ui";
import {Lazyload} from"mint-ui";
//使用的库
//2.注册当前项目中
//Vue.component(Header.name,Header,)
//            标签名称               对象
////alert(Header.name)//mt-header
//Vue.component(Swipe.name,Swipe)
//Vue.component(SwipeItem.name,SwipeItem)
//Vue.component(Search.name,Search)
//Vue.component(Range.name,Range)
//Vue.component(Button.name,Button)
//Vue.component(Tabbar.name,Tabbar)
//Vue.component(TabItem.name,TabItem)
//Vue.component(TabItem.name,TabItem)
//Vue.use(Lazyload);

import MintUI from "mint-ui";
Vue.use(MintUI)

//Vue.component(Lazyload.name,Lazyload)
//引入vue-resource 发送ajax
import VueResource from "vue-resource";
Vue.use(VueResource)



//3.main.js创建过滤器
//val 源日期对象
//返回日期格式对象
//Vue.filter("dateFilter",function(val){
//	var date=new Date(val);//创建日期对象
//	var y=date.getFullYear();
//	var m=date.getMonth()+1;
//	var d=date.getDate();
//	m<10&&(m="0"+m);//如果月份<10加前缀0
//	d<10&&(d="0"+d);//日<10 加前缀0
//	return `${y}-${m}-${d}`;//拼接
//});

//val：参数  {{日期字符串 | 过滤器}}  val就是左右字符串
Vue.filter("datetimeFilter",function(val){
	var date=new Date(val);//创建日期对象
	var y=date.getFullYear();
	var m=date.getMonth()+1;
	var d=date.getDate();
	var h=date.getHours();
	var h=date.getMinutes();
	var s=date.getSeconds();
	m<10&&(m="0"+m);//如果月份<10加前缀0
	d<10&&(d="0"+d);//日<10 加前缀0
	return `${y}-${m}-${d} ${h}:${m}:${s}`;
});

//配置VueResource服务器根目录
Vue.http.options.root="http://127.0.0.1:3000/"
//修改请求头  POST
//Vue.http.options.enulateJSON=true;
//4.创建Vuex实例对象
//1）下载安装 Vuex    npm i vuex -D
//2)引入Vuex
import Vuex from "vuex";
//3)注册Vuex实例
Vue.use(Vuex);
//4）创建Vuex实例对象
var store=new Vuex.Store({
	state:{count:0},      //购物车中商品数量
	mutations:{
		increment(state,c){
			state.count+=parseInt(c)
		},	//修改共享数据两个方法
		substract(state){
			state.count--
		}
	},//参数共享数据属性
	getters:{
		optCount:function(state){
			return state.count;//返回共享数据
		}
	}
});
//5.注册Vue实例
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
