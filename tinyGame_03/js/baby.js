
//鱼宝宝类 
var babyObj = function(){
	this.x;
	this.y;            //鱼宝宝坐标
	this.angle;
	this.babyEye = []; //鱼宝宝眼睛身体尾巴数组
	this.babyBody = [];
	this.babyTail = [];
	

	this.babyEyeIdx = 0;            //显示图片下标 
	this.babyEyeEndtime = 2000;     //显示睁眼时间长度
	this.babyEyeStart = 1;          //计时开始 

	this.babyBodyIdx = 0;
	this.babyBodyEndtime = 3000;
    this.badyBodyStart = 1;

	this.babyTailIdx = 0;
	this.babyTailEndTime = 1000;
	this.babyTailStart = 1;	
}
babyObj.prototype.init = function(){
	 //初始鱼宝宝在屏幕中间
	 this.x = canWidth * 0.5;
	 this.y = canHeigh * 0.5;
     this.angle = 0;	 
	 //初始化图片组
     for(var i=0;i<2;i++){
		 this.babyEye[i]=new Image();
		 this.babyEye[i].src = "./src/babyEye"+i+".png";
	 }
     for(var i=0;i<20;i++){
		this.babyBody[i]=new Image();
		this.babyBody[i].src = "./src/babyFade"+i+".png";
	 }
     for(var i=0;i<8;i++){
		this.babyTail[i]=new Image();
		this.babyTail[i].src = "./src/babyTail"+i+".png";
	 }
	 
}
babyObj.prototype.draw = function(){
 	this.x = lerpDistance(mom.x,this.x,0.98);
 	this.y = lerpDistance(mom.y,this.y,0.99);
// 	//lerp angle
 	var deltaY = mom.y - this.y;
 	var deltaX = mom.x - this.x;
 	var beta = Math.atan2(deltaY,deltaX) + Math.PI;//-PI,PI
// 	//lerp angle
 	this.angle = lerpAngle(beta,this.angle,0.6);


	//判断尾巴 身体 与 眼睛 
	this.badyBodyStart += deltaTime;
	if(this.badyBodyStart > this.babyBodyEndtime){
		this.babyBodyIdx = (this.babyBodyIdx+1);
		this.badyBodyStart = 1;
		if(this.babyBodyIdx>18){
			this.babyBodyIdx = 18;
			data.gameOver = true;///游戏结束了。。。。。
		}
	} 
    //console.log(this.babyBodyIdx);	

	this.babyTailStart += deltaTime;
	if(this.babyTailStart > this.babyTailEndTime){
		this.babyTailIdx = (this.babyTailIdx+1)%8;
        this.babyTailStart = 1;
	} 


	this.babyEyeStart += deltaTime;
	if(this.babyEyeStart>this.babyEyeEndtime){
		this.babyEyeIdx = (this.babyEyeIdx+1)%2;
		this.babyEyeStart = 1;          //计时开始 
	}            //显示图片下标 
    if(this.babyEyeIdx==0){
		this.babyEyeEndtime = 3000;
	}
	if(this.babyEyeIdx==1){
		this.babyEyeEndtime = 300;
	}
	

	var eye = this.babyEye[this.babyEyeIdx];
	var body = this.babyBody[this.babyBodyIdx];
	var tail = this.babyTail[this.babyTailIdx];

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(body,-body.width*0.5,-body.height*0.5);
	ctx1.drawImage(tail,-tail.width*0.5+23,-tail.height*0.5);
	ctx1.drawImage(eye,-eye.width*0.5,-eye.height*0.5);	
	ctx1.restore(); 
}









// var babyObj = function(){
// 	this.x;
// 	this.y;
// 	this.angle;
// 	this.babyEye = new Image();
// 	this.babyBody = new Image();
// 	//this.babyTail = new Image();

// 	this.babyTailTimer = 0;//小鱼尾巴计时器
// 	this.babyTailCount = 0;//小鱼尾巴当前显示帧续号

// 	this.babyEyeTimer = 0;//小鱼眼睛计时器
// 	this.babyEyeCount = 0;//小鱼眼睛当前显示帧续号
// 	//当前这张图片需要持续多长时间 
//     this.badyEyeInterval = 1000;//小鱼眼睛时间间隔


// 	this.babyBodyTimer = 0;//小鱼身体计时器
// 	this.babyBodyCount = 0;//小鱼身体当前显示帧续号
	

// }
// babyObj.prototype.init = function(){
// 	this.x = canWidth * 0.5 - 50;
// 	this.y = canHeigh * 0.5 + 50;
// 	this.angle = 0;
// 	//this.babyEye.src = "./src/babyEye0.png";
// 	this.babyBody.src = "./src/babyFade0.png";
// 	//this.babyTail.src = "./src/babyTail0.png";
// }
// babyObj.prototype.draw = function(){
// 	//lerp x,y
// 	this.x = lerpDistance(mom.x,this.x,0.98);
// 	this.y = lerpDistance(mom.y,this.y,0.99);

// 	//lerp angle
// 	var deltaY = mom.y - this.y;
// 	var deltaX = mom.x - this.x;
// 	var beta = Math.atan2(deltaY,deltaX) + Math.PI;//-PI,PI
	
// 	//lerp angle
// 	this.angle = lerpAngle(beta,this.angle,0.6);


// 	//baby tail count
// 	this.babyTailTimer +=  deltaTime;
// 	//如果执行时间超过50毫秒，下一帧
// 	if(this.babyTailTimer > 50){
// 		this.babyTailCount = (this.babyTailCount+1)%8;
// 		this.babyTailTimer %= 50;//计时器恢原
// 	}


// 	this.babyEyeTimer += deltaTime;
// 	if(this.babyEyeTimer > this.badyEyeInterval){
// 		this.babyEyeCount = (this.babyEyeCount+1)%2
// 		this.babyEyeTimer %= this.badyEyeInterval;

// 		if(this.babyEyeCount==0){
// 			this.badyEyeInterval = Math.random()*1500+2000;
// 		}else{
// 			this.badyEyeInterval = 200;
// 		}
// 	}

// 	this.babyBodyTimer += deltaTime;
// 	if(this.babyBodyTimer > 300){
// 		  this.babyBodyCount = this.babyBodyCount+1;
// 		  this.babyBodyTimer %= 300;  
// 		  if(this.babyBodyCount > 19){
// 			  this.babyBodyCount = 19
// 		  }

// 	}



// 	ctx1.save();
// 	ctx1.translate(this.x,this.y);
// 	ctx1.rotate(this.angle);

// 	var tail = badyTail[this.babyTailCount];
// 	var eye = badyEye[this.babyEyeCount];
// 	var body = badyBody[this.babyBodyCount];
	

// 	//ctx1.drawImage(this.babyTail,-this.babyTail.width * 0.5 + 23,-this.babyTail.height * 0.5);
// 	ctx1.drawImage(tail,-tail.width * 0.5 + 23,-tail.height * 0.5);
	
	
// 	ctx1.drawImage(body,-body.width * 0.5,-body.height * 0.5);

// 	//ctx1.drawImage(this.babyEye,-this.babyEye.width * 0.5,-this.babyEye.height * 0.5);
// 	ctx1.drawImage(eye,-eye.width * 0.5,-eye.height * 0.5);
	
// 	ctx1.restore();
// }
