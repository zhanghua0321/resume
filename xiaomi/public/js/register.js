//var isRegister=false;
//function checkUname(){
//	var xhr=createXhr();
//	xhr.onreadystatechange=function(){
//		if(xhr.readyState==4 && xhr.status==200){
//			var res=xhr.responseText;
//			if(res=="1"){
//				$("showUname").innerHTML="用户已经存在！";
//				isRegister=false;
//			}else if(res=="3"){
//				$("showUname").innerHtml="用户名不能为空！";
//			}else{
//				
//			}
//
//		}
//	}
//}
//正则验证输入框
var form=document.forms[0];
var txtName=form.username;
var txtPwd=form.upwd;
var txtCpwd=form.cpwd;
var txtPhone=form.phone;
var txtEmail=form.email;
txtName.onfocus=txtPwd.onfocus=txtCpwd.onfocus=txtPhone.onfocus=txtEmail.onfocus=function(){
	this.className="txt_focus";
	var div=this.parentNode.nextElementSibling.firstElementChild;
	div.className="vali_info_after";
	var span=this.nextElementSibling;
	span.className="my_span_hidden";
}
txtName.onblur=function(){
	vali(this,/^\w{1,10}$/);
}
txtPwd.onblur=function(){
  vali(this,/^\d{6}$/);
}
txtCpwd.onblur=function(){
	vali(this,/^\d{6}$/);
}
txtPhone.onblur=function(){
	vali(this,/^(\+86|0086)?\s*1[3-8]\d{9}$/);
}
txtEmail.onblur=function(){
	vali(this,/^\w+@[0-9a-zA-Z\-]+(\.[a-zA-Z]{2,6}){1,2}$/);
}
function vali(txt,reg){
	txt.className="";
	var div=txt.parentNode.nextElementSibling.firstElementChild;
	if(reg.test(txt.value)){
    div.className="vali_success";
    txt.className="vali_success_after";
    return true;
    }else{
    div.className="vali_fail";
    txt.className="vali_fail_after";
    return false;
   }
}
//错误后阻止提交
form.elements[form.length-2].onclick=function(){
	if(!vali(txtName,/^\w{1,10}$/)){
		txtName.focus();
	}else if(!vali(txtPwd,/^\d{6}$/)){
		txtPwd.focus();
	}else if(!vali(txtCpwd,/^\d{6}$/)){
		txtCpwd.focus();
	}else if(!vali(txtPhone,/^(\+86|0086)?\s*1[3-8]\d{9}$/)){
		txtPhone.focus();
	}else if(!vali(txtEmail,/^\w+@[0-9a-zA-Z\-]+(\.[a-zA-Z]{2,6}){1,2}$/)){
		txtEmail.focus();
	}else{
		form.submit()
	}
}

//同意使用条款
$(":checkbox").on("click",function(){
  	var $chb=$(this);
  	$("input:not(:checkbox)").prop("disabled",!$chb.prop("checked"))
  })
