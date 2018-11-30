
document.body.onload = game;

var can1 = null;
var can2 = null;
var ctx1 = null;
var ctx2 = null;
const DEBUG = true;

var lastTime;//上一帧被执行的时间
var deltaTime;//二帧间隔的时间差

var canWidth = 0; //画布的宽和高，二个画布一样
var canHeigh = 0;//


var bgPic = new Image();//背景图

var ane = null;//海葵对象

var fruit = null;//果实对象

var mom = null;//大鱼对象

var baby = null;

//为了大鱼移动定义鼠标位置
var mx = 0;
var my = 0;

//小鱼的尾巴
// var badyTail = [];
// var badyEye = [];
// var badyBody = [];


// //鱼妈妈尾
// var momTail = [];
// var momEye = [];

//记分
var data = null;

//大鱼吃食物特效
var wave;

//大鱼喂小鱼食物
var halo;

//漂浮物 
var dust;
//var dustPic = [];



//项目入口程序....
function game(){
    init();                  //初始化程序，获取画布，创建画笔,创建对象，加载资源，初始化基础数据
    gameloop();
}

function init(){
    can1 = document.getElementById("canvas1");//鱼，果实
    can2 = document.getElementById("canvas2");//背景，海葵
    ctx1 = can1.getContext("2d");
    ctx2 = can2.getContext("2d");
    bgPic.src = "src/background.jpg";

    lastTime = Date.now();   //
    deltaTime = 0;           //


    canWidth = can1.width;
    canHeigh = can1.height;

    ane = new aneObj();
    ane.init();
    //ane.draw();
    //console.log(ane);
    fruit = new fruitObj();
    fruit.init();
    mom = new momObj();
    mom.init();
    baby = new babyObj();
    baby.init();

    mx = canWidth * 0.5;
    my = canHeigh * 0.5;

    can1.addEventListener("mousemove",onMouseMove,false);

    this.data = new dataObj();
    wave = new waveObj();
    wave.init();

    halo = new haloObj();
    halo.init();
   
    dust = new dustObj();
    dust.init();
}


function gameloop(){
    requestAnimFrame(gameloop);//绘制一个图片，跟据机器的性能，选择下一次(最佳)绘制时间，再绘
                               //智能计算过程，而setintervar 指定间隔，
                               //新技术也会遇到一个问题..frame per second
                               //导致帧与帧之间间隔不固定
                               //而且还有兼容性问题，我们用工具类 
    //console.log("loop 测试是否成功");  
    
    
    var now  = Date.now();         //我们要计算二帧之间一共执行了多长时间 
    deltaTime = now - lastTime;   //
    lastTime = now;               //
    if(deltaTime>40) deltaTime = 40;//

    //console.log(deltaTime);     //不同的浏览器计算结果不一致
    drawBackground();
    ctx1.clearRect(0,0,canWidth,canHeigh);
    ane.draw();
    fruitMonitor();
    fruit.draw();
    momFruitsCollision();
    momBabyCollision();
    mom.draw();
    baby.draw();
    //console.log(aneObj);
    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();
}
function onMouseMove(e){
    //游戏结束，鼠标不能控制大鱼
    if(data.gameOver){return;}

    if(e.offsetX || e.layerX){
      mx = e.offsetX == undefined ? e.layerX : e.offsetX;
    }
    if(e.offsetY || e.layerY){
     my = e.offsetY == undefined ? e.layerY : e.offsetY;
    }
    //console.log(mx+"|"+my);

         
}