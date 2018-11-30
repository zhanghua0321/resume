//果实类
var fruitObj = function(){
       this.alive = [];//是否活着BOOL
       this.orange = new Image();//桔色图片
       this.blue = new Image();//蓝色图片
       this.x = [];//果实的位置
       this.y = [];//果实的位置
       this.l = [];//图片的长度（由小变大）
       this.spd = [];//每个果实向上速度
       this.fruitType = [];
       this.aneNO = [];//第几个海葵
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;//初始每个海葵活动的 ..
        this.x[i] = 0;
        this.y[i] = 0;
        this.aneNO[i] = 0;
        //速度..变大的速度，向上的速度。
        this.spd[i] = Math.random()*0.017+0.003;  //[0.005-0.015)
        this.fruitType[i]="";
    } 
   this.orange.src = "./src/fruit.png";
   this.blue.src = "./src/blue.png";
};

//保持屏幕上果实数量，最少15个
fruitObj.prototype.draw = function(){ 
  for(var i=0;i<this.num;i++){
       //find an ane,grow,fly up
       if(this.alive[i]){//如果是活动状态才显示

         //出生时指定类型 blue orange
         if(this.fruitType[i]=="blue"){
            var pic = this.orange;
        }else{
            var pic = this.blue;
        }
        //先由小变大最大14个像素
        if(this.l[i]<=14){    
          var NO = this.aneNO[i];
          this.x[i] = ane.headx[NO];
          this.y[i] = ane.heady[NO];
          this.l[i] += this.spd[i]*deltaTime;
          //console.log(this.x[i]+"_"+this.y[i]+"_"+this.l[i]);
          ctx2.drawImage(pic,
            this.x[i]-this.l[i]*0.5,  //出生画在中间
            this.y[i]-this.l[i]*0.5,
            this.l[i],
            this.l[i]);  
        }else{
           //变大后向上漂 
           this.y[i]-=this.spd[i]*3*deltaTime;//向上 
        
           ctx2.drawImage(pic,
            this.x[i]-this.l[i]*0.5,  //出生画在中间
            this.y[i]-this.l[i]*0.5,
            this.l[i],
            this.l[i]);  
        }  

        
        //浮出屏幕
        if(this.y[i]<10){
           this.alive[i]=false;
        }
     } 
 }
};

//果实出生的方法 
fruitObj.prototype.born = function(i){ 
    this.aneNO[i] = Math.floor(Math.random()*ane.num);
    this.l[i] = 0;//初始化时大小均为0
    this.alive[i]=true;
    this.fruitType[i] = Math.random()<0.9?"orange":"blue";
};

//监听如果活的果实不足15个就创建一个活的食物
function fruitMonitor(){
    var num = 0;
    for(var i=0;i<fruit.num;i++){
       if(fruit.alive[i])num++;
    }
    if(num<15){//如果食物小于15个就
        //send fruit
        sendFruit();
        return;
    }
}

function sendFruit(){
    for(var i=0;i<fruit.num;i++){
        if(!fruit.alive[i]){
             fruit.born(i);//!!!!!!!在这里出生一个食物
             return;
        }
    }
}

fruitObj.prototype.dead = function(i){
    this.alive[i]=false;
} 