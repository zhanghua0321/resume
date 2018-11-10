import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//引入自定义组件
import TestContainer from"./components/testContainer.vue";
import listContainer from"./components/listContainer.vue";

//import HomeContainer from"./components/tabbar/HomeContainer.vue";
//import newsListContainer from"./components/news/newsListContainer.vue";
//import newInfoContainer from"./components/news/newInfoContainer.vue";
//import ShopContainer from"./components/tabbar/ShopContainer.vue";
//import goodsList from"./components/goods/GoodList.vue";
//import goodsInfo from"./components/goods/GoodInfo.vue";
//import photo from"./components/photo/PhotoContainer.vue";
//import login from"./components/home/LoginContainer.vue";

import Home from"./components/xiaomi/Home.vue";
import newsList from"./components/xiaomi/newsList.vue";
import newInfo from"./components/xiaomi/newInfo.vue";
import shop from"./components/xiaomi/shop.vue";
import goodslist from"./components/xiaomi/GoodList.vue";
import goodsinfo from"./components/xiaomi/GoodInfo.vue";
import photolist from"./components/xiaomi/photo.vue"
import login from"./components/home/LoginContainer.vue";

Vue.use(Router)

//配置访问自定义组件路径
export default new Router({
  routes: [
    {path:'/',redirect:"/xiaomiHome"},//路径  组件名称
    {path:"/test",component:TestContainer},
    {path:"/list",component:listContainer},
    
//  {path:"/home",component:HomeContainer},
//  {path:"/home/newslist",component:newsListContainer},
//  {path:"/home/newsinfo",component:newInfoContainer},   
//  {path:"/home/shop",component:ShopContainer},
//  {path:"/home/goodslist",component:goodsList},
//  {path:"/home/goodsinfo/:id",component:goodsInfo},
//  {path:"/home/photo",component:photo},
   
    
    
    {path:"/xiaomiHome",component:Home},
    {path:"/xiaomiHome/newslist",component:newsList},
    {path:"/xiaomiHome/newsinfo",component:newInfo},
    {path:"/xiaomiHome/shop",component:shop},
    {path:"/xiaomiHome/goodslist",component:goodslist},
    {path:"/xiaomiHome/goodsinfo/:id",component:goodsinfo},
    {path:"/xiaomiHome/photo",component:photolist},
    {path:"/home/login",component:login},
		
  ]
})
//http://127.0.0.1:3001/#/test   #——>路由  test——>test





