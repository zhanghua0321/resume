
//海葵类
//所有海葵都在此类中50条
var aneObj = function(){
     //start point,control point,end point
     this.rootx = [];//start point   y值固定在最底部
     this.headx = [];//end point
     this.heady = [];
     this.amp = [];//正浮    (-1~1)
     this.alpha = 0;//正弦函数的角度。。
}
aneObj.prototype.num = 50;//50条海葵...
aneObj.prototype.init = function(){

   var h = canHeigh; 
   for(var i=0;i<this.num;i++){
       //每个海葵，生长的位置随机，比较像自然生长
       this.rootx[i] = i * 16 + Math.random()*20;
       this.headx[i] = this.rootx[i];;//如果结束点在中心，是一条笔直线段
       this.heady[i] = canHeigh - 250 + Math.random()*50;
       this.amp[i] = Math.random() * 50 + 50;
   }
}

aneObj.prototype.draw = function(){

    //海葵是随着时间变化的
    this.alpha += deltaTime * 0.0008;
    var l = Math.sin(this.alpha);
    //console.log(l);
    ctx2.save();
    ctx2.strokeStyle = "#3b154e";
    ctx2.globalAlpha = 0.6;
    ctx2.lineCap = "round";
    ctx2.lineWidth = 20;
    
    for(var i=0;i<this.num;i++){
     ctx2.beginPath();
     ctx2.moveTo(this.rootx[i],canHeigh);
     this.headx[i] = this.rootx[i] + l * this.amp[i];

     ctx2.quadraticCurveTo(this.rootx[i],canHeigh-100,this.headx[i],this.heady[i]);
     //ctx.strokeStyle();
     ctx2.stroke();
    }
    ctx2.restore();
    
}