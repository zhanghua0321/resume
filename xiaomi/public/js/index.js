//轮播
function task(){
	var img=slider.querySelector(".show")
	img.className="";
	var next=img.nextElementSibling;
	if(next!=null){
		next.className="show";
	}else{
		img.parentNode.children[0].className="show";
	}
}
var timer=setInterval(task,3000)
  //鼠标移入停止轮播
  slider.onmouseover=function(){
  	clearInterval(timer)
  }
  //鼠标移出继续启动
  slider.onmouseout=function(){
  	timer=setInterval(task,3000)
  }


//选择框 显示隐藏
document.getElementById("content1").style.zIndex=10;
//绑定事件处理
var tabs=document.querySelectorAll("[data-toggle=tab]");
for(var tab of tabs){
	tab.onclick=function(){
		var tab=this;
		var divs=document.getElementById("conta").children;
		for(var div of divs){
			div.style.zindex="";
		}
		var id=tab.getAttribute("data-target");
		var div=document.querySelector(id);
		div.style.zindex=10;
	}
}


//显示

