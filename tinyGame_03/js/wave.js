var waveObj = function(){
   this.x = [];
   this.y = [];
   this.r = [];
   this.alive =[];
}
waveObj.prototype.num = 10;
waveObj.prototype.init = function(){
  for(var i=0;i<this.num;i++){
       this.alive[i]=false;
       this.r[i]=0;
  }
}
waveObj.prototype.draw = function(){
    //console.log("draw");
    ctx1.save();
    ctx1.lineWidth = 2;
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "red";

    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            //draw
            this.r[i] += deltaTime * 0.02;  //变大
//            console.log(this.r[i]);
            if(this.r[i]>100){
                this.alive[i]=false;
                break;
            }
            var alpha = 1 - this.r[i]/100;       //变淡
            ctx1.beginPath();
            ctx1.strokeStyle = "rgba(255,255,255,"+alpha+")";
 //           console.log(this.x[i]);
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
            ctx1.closePath();
            ctx1.stroke();
        }
   }
   ctx1.restore();
}


waveObj.prototype.born = function(x,y){
    for(var i=0;i<this.num;i++){
        //第一个没出生
        if(!this.alive[i]){
            //draw
            this.alive[i]=true;
            this.r[i]=20;
            this.x[i]=x;
            this.y[i]=y;
            return;
        }
   }
}





