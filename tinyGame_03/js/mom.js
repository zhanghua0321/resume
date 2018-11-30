//大鱼妈妈
var momObj = function(){
    this.x;
    this.y;
    this.angle;//大鱼角度
    //this.bigEye = new Image();
    //this.bigBody = new Image();
    //this.bigTail = new Image();
    this.bigEye = [];
    this.bigBody = [];
    this.bigTail = [];
 
     
    this.bigTailIndex = 0;
    this.bigTailEndtime = 10;
    this.bigTailStart = 1;

    this.bigBodyIndex = 0;
    this.bigBodyEndtime = 3000;
    this.bigBodyStart = 1;

    this.bigEyeIndex = 0;
    this.bigEyeEndtime = 2000;
    this.bigEyeStart = 1;


}
momObj.prototype.init = function()
{
    this.x = canWidth * 0.5;//保存在中间
    this.y = canHeigh * 0.5;//
    this.angle = 0;//初始角度为0
    for(var i=0;i<2;i++){
     this.bigEye[i] = new Image();   
     this.bigEye[i].src = "./src/bigEye"+i+".png";
    }

    for(var i=0;i<8;i++){
     this.bigBody[i] = new Image();   
     this.bigBody[i].src = "./src/bigSwim"+i+".png";
    }
    for(var i=0;i<8;i++){
     this.bigTail[i] = new Image();   
     this.bigTail[i].src = "./src/bigTail"+i+".png";
    }       
}
momObj.prototype.draw = function(){
    //使用全局函数，，让我们大鱼移动驱向鼠标
    //mx my 鼠标坐标 x y 大鱼位置

    this.x = lerpDistance(mx,this.x,0.98);//运动的反映调慢一些 0.9--0.98
    this.y = lerpDistance(my,this.y,0.99);
    //获取坐标差.
    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    //计算大鱼与鼠标的角度差。。
    var beta = Math.atan2(deltaY,deltaX)+Math.PI;//-PI,PI
    //让大鱼的角度趋向于鼠标的角度
    //lerp angle 
    //                目标值    当前值 
    this.angle = lerpAngle(beta,this.angle,0.9);

    
    //下标切换的太快添加一个时间改变
    this.bigTailStart=this.bitTailStart+deltaTime;
    if(this.bigTailStart>this.bigTailEndtime){
     this.bigTailStart = 1;   
     this.bigTailIndex = (this.bigTailIndex+1)%8;
    }


    this.bigBodyStart=this.bigBodyStart+deltaTime;
    if(this.bigBodyStart>this.bigBodyEndtime){
     this.bigBodyStart = 1;   
     this.bigBodyIndex = (this.bigBodyIndex+1);
     if(this.bigBodyIndex>7){
        this.bigBodyIndex = 7;
     }
    }

    this.bigEyeStart = this.bigEyeStart+deltaTime;
    if(this.bigEyeStart>this.bigEyeEndtime){
        this.bigEyeStart = 1;   
        this.bigEyeIndex = (this.bigEyeIndex+1)%2;
        if(this.bigEyeIndex==1){
           this.bigEyeEndtime = 300;
        }
        if(this.bigEyeIndex==0){
            this.bigEyeEndtime = 3000;
         }
          
       }
       


    ctx1.save();
    //我们希望坐标点在鱼身上中间
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigBody[this.bigBodyIndex],
        -this.bigBody[this.bigBodyIndex].width*0.5,
        -this.bigBody[this.bigBodyIndex].height*0.5);
    ctx1.drawImage(this.bigTail[this.bigTailIndex],
        -this.bigTail[this.bigTailIndex].width*0.5+30,
        -this.bigTail[this.bigTailIndex].height*0.5);
    ctx1.drawImage(this.bigEye[this.bigEyeIndex],
        -this.bigEye[this.bigEyeIndex].width*0.5,
        -this.bigEye[this.bigEyeIndex].height*0.5);
   
    ctx1.restore();
}


//=============================
//大鱼妈妈
// var momObj = function(){
//     this.x;
//     this.y;
//     this.angle;//大鱼角度
//     this.bigEye = new Image();
//     this.bigBody = new Image();
//     this.bigTail = new Image();
// }
// momObj.prototype.init = function()
// {
//     this.x = canWidth * 0.5;//保存在中间
//     this.y = canHeigh * 0.5;//
//     this.angle = 0;//初始角度为0
//     this.bigEye.src = "./src/bigEye0.png";
//     this.bigBody.src = "./src/bigSwim0.png";
//     this.bigTail.src = "./src/bigTail0.png";
// }
// momObj.prototype.draw = function(){
//     //使用全局函数，，让我们大鱼移动驱向鼠标
//     //mx my 鼠标坐标 x y 大鱼位置

//     this.x = lerpDistance(mx,this.x,0.98);//运动的反映调慢一些 0.9--0.98
//     this.y = lerpDistance(my,this.y,0.99);
//     //获取坐标差.
//     var deltaY = my - this.y;
//     var deltaX = mx - this.x;
//     //计算大鱼与鼠标的角度差。。
//     var beta = Math.atan2(deltaY,deltaX)+Math.PI;//-PI,PI
//     //让大鱼的角度趋向于鼠标的角度
//     //lerp angle 
//     //                目标值    当前值 
//     this.angle = lerpAngle(beta,this.angle,0.9);


//     ctx1.save();
//     //我们希望坐标点在鱼身上中间
//     ctx1.translate(this.x,this.y);
//     ctx1.rotate(this.angle);
//     ctx1.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);
//     ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
//     ctx1.drawImage(this.bigTail,-this.bigTail.width*0.5+30,-this.bigTail.height*0.5);
//     ctx1.restore();
// }
