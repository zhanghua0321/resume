//分值
var dataObj = function(){
    this.fruitNum = 0;
    this.double = 1;//吃到了双倍分数的，桔色果实
    this.score = 0;
    this.gameOver = false; //游戏是否结果
    this.alpha = 0;
}
//小鱼和mom碰到一起mom分值，恢复
dataObj.prototype.reset = function(){
    this.fruitNum = 0;
    this.double = 1;
}
dataObj.prototype.draw = function(){
    var w = can1.width;
    var h = can1.height;


    ctx1.save();
    ctx1.fillStyle = "white";
    ctx1.font = "35px Verdana";
    ctx1.textAlign = "center";
 
    
    //ctx1.fillText("num: "+this.fruitNum,w*0.5,h-50);
    //ctx1.fillText("double: "+this.double,w*0.5,h-80);
    //console.log(this.score);
    ctx1.fillText("SCORE: "+this.score,w*0.5,h-80);

    if(this.gameOver){
        //ctx1.shadowBlur = 5;
        //ctx1.shadowOffsetX = 5;
        //ctx1.shadowOffsetY = 5;
        //ctx1.shadowColor = "while";
        this.alpha += deltaTime * 0.0003;
        this.alpha = this.alpha > 1 ? 1 : this.alpha; 
        ctx1.fillStyle = "rgba(255,255,255,"+this.alpha+")";
        ctx1.font = "55px Verdana";
        ctx1.fillText("GAMEOVER",w*0.5,h*0.5);        
    }
    
    ctx1.restore();
}

dataObj.prototype.addScore = function(){
   this.score += this.fruitNum * 100 * this.double;
   this.fruitNum = 0;
   this.double = 1;
   //console.log(this.score);
} 