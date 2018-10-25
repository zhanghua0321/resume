//1.改变数量 小计  总计

//用id来查找table
var table=document.getElementById("data");
//找table下的所有btns

	//当点击一个按钮时
	//利用冒泡  将触发绑定在table上  使新增的子元素也可以获得同样效果
 	table.onclick=function(e){
		var btn=e.target;
		if(btn.nodeName=="BUTTON"){
		var span=btn.parentNode.children[1];
		console.log(span);
		var n=parseInt(span.innerHTML);
		if(btn.innerHTML==="+")
			n++;
		else if(n>1)
			n--;
		span.innerHTML=n;
		//btn的父元素的前一个兄弟元素的第一个子元素
		var price=parseFloat(btn.parentNode.previousElementSibling.firstElementChild.innerHTML.slice(1));
		//单价
		var subtotal=price*n;
		//将小计放到btn的父元素的后一个兄弟元素的第一个子元素上
		btn.parentNode.nextElementSibling.firstElementChild.innerHTML="￥"+subtotal.toFixed(2);
		
		//元素选择器  将小计都找出来
		var tds=document.querySelectorAll(
			"table>tbody>tr>td:nth-child(5)"
		)
		var total=0;
		for(var td of tds){
			total+=parseFloat(td.firstElementChild.innerHTML.slice(1))
		}
		document.querySelector(
			"table>tfoot>tr>td:nth-child(5)"
		).innerHTML="￥"+total.toFixed(2);	
	}
}

//全选
//1.点击全选 下方复选框都选中
var chbAll=document.querySelector(
	"table>thead>tr>td:first-child>input"
);
chbAll.onclick=function(){
	var chbAll=this;
	var chbs=document.querySelectorAll(
		"table>tbody>tr>td:first-child>input"
	);
	for(var chb of chbs){
		chb.checked=chbAll.checked;
	}
}
//2.下方复选框影响上方全选
//1)绑定在所有的input上    查找所有的 chbs  
//var chbs=document.querySelectorAll(
//	"table>tbody>tr>td:first-child>input"
//);
//2)利用冒泡  事件绑定在tbody上 
var tbody=document.querySelector("table>tbody");
//for(var chb of chbs){
	tbody.onclick=function(e){
	  if(e.target.type=="checkbox"){
		var chb=e.target;
		if(chb.checked==false)
			chbAll.checked=false;
		else{
			var unchecked=document.querySelector(
				"table>tbody>tr>td:first-child>input:not(:checked)"
			);
			if(unchecked!=null)
				chbAll.checked=false;
			else
				chbAll.checked=true;
		}
	}
}
//3.操作  删除
var json=[
    {"ename":"Tom", "salary":11000, "age":25},
    {"ename":"John", "salary":13000, "age":28},
    {"ename":"Mary", "salary":12000, "age":25}
  ];
  var table=document.createElement("table")
  var thead=table.createTHead();
  var tr=thead.insertRow();
  //遍历json数据对象
  for(var key in json[0]){
 		tr.insertCell().innerHTML=key;
  }
  //遍历json动态生成表格内容
  //为每行添加删除按钮，点击可删除
//tr.insertCell().innerHTML="操作";
//var tbody=table.createTBody();
//	for(var keys of json){
//		var tr=tbody.insertRow(0);
//		for(var key in keys){
//			tr.insertCell().innerHTML=keys[key];
//		}
//		var td=tr.insertCell();
//		var btn=document.createElement("button");
//		btn.innerHTML="x";
//		btn.onclick=function(){
//			var btn=this;
//			var tr=btn.parentNode.parentNode;
//			var ename=tr.cells[0].innerHTML;
//			if(confirm(`继续删除${ename}吗？`))
//				table.deleteRow(tr.rowIndex);						
//		}
//		td.appendChild(btn);
//	}
////将table追加到DOM树中div之后
////这就话放到最后  优化的一种 减少DOM树操作
//document.getElementById("data").appendChild(table);
  
//4.



