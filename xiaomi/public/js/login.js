//function login(){
//	var xhr=createXhr();
//	xhr.onreadystatechange=function{
//		if()==4&&xhr.status==200){
//			var res=xhr.responseText;
//			alert(res);
//		}
//	}
//	xhr.open("post","/public/login",true);
//	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//	var uname=$("uname").value;
//	var upwd=$("upwd").value;
//	var yzm=$("yzm").value;
//	
//}

//验证信息
var $txtName=$(":text"),$txtPwd=$(":password")
function vali($txt,minlen,maxlen,errmsg){
	var val=$txt.val();
	if(val.length>=minlen && val.length<=maxlen){
		$txt.next().html("<img src='image/ok.png'>")
		return true;
	}else{
		$txt.next().html("<img src='image/err.png'>"+errmsg)
		return false;
	}
}
$txtName.on("blur",function(){
	vali($(this),3,9,"请输入您的用户名")
})
$txtPwd.on("blur",function(){
	vali($(this),6,8,"请输入6位数字密码！")
})
$("form").on("submit",function(e){
    	var rName=vali($txtName,3,9,"用户名必须为3~9位！")
    	var rPwd=vali($txtPwd,6,8,"密码必须为6位数字！")
    	if(!(rName&&rPwd))
    		e.preventDefault();    	
})
//登录接口
//$(function(){
//	$("input.")
//})
