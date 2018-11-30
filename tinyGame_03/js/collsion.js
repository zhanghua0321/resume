//碰撞检测 ...  大鱼碰到果实
function momFruitsCollision(){
   //如果游戏结束了，大鱼就不能吃果实
   if(data.gameOver){return;}

   for(var i=0;i<fruit.num;i++){
      if(fruit.alive[i]){
          var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
          if(l < 900){ //小于30象素，平方
                fruit.dead(i);
                data.fruitNum++;//果实的数量加一
                if(fruit.fruitType[i] == "blue"){
                  data.double = 2;
                }
                //大鱼吃到食物出现动画效果
                wave.born(fruit.x[i],fruit.y[i]);
          }
      }
   }
}

//大鱼碰到小鱼
function momBabyCollision(){
    if(data.gameOver){return;}//游戏结束大鱼不能喂小鱼
    if(DEBUG){
     //console.log(data.fruitNum);
    }
    if(data.fruitNum>0){//大鱼必须吃到一定数量的果实后，才能喂小鱼
    //mom baby 距离
    var l = calLength2(mom.x,mom.y,baby.x,baby.y);
    //console.log(l);
    if(l < 900){
       //baby reconver
       baby.babyBodyIdx = 0;
       //data.reset();
       data.addScore(); 
       halo.born(baby.x,baby.y);//产生一个大鱼碰小鱼的特效元素       
    }
  }
}