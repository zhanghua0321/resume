$(function(){
	//1.动态创建link引用header.css
	$("<link rel='stylesheet' href='css/header.css'>").appendTo("head")
	//appendTo  $新元素.appendTo(parent) //return $新元素,可继续链式操作,后续对新元素打.操作
	//2.ajax请求header.html的header片段
	$.ajax({
		url:"http://localhost:3000/header.html",
		type:"get",
		success:function(res){			
			$("#header").replaceWith(res)
			console.log(res)
			new Vue({
				el:"#header",
				data:{
					kword:"",
					islogin:false,
					uname:""
				},
				mounted(){
					if(location.search.indexOf("kwords")!=-1){
      					this.kword=decodeURI(location.search.split("=")[1])      		
      			}				
				$.ajax({
		      		url:"http://localhost:3000/users/islogin",
		      		type:"get",
		      		dataType:"json",
		      		success:res=>{
		      			if(res.ok==0){
		      				this.islogin=false
		      			}else{
		      				this.islogin=true
		      				this.uname=res.uname;
		      			}
		      		}
		      	})
				},
				computed:{
					signin(){
						return `login.html?back=${location.href}`
					}
				},
				methods:{
          search(){//@click   @keyup
            if(this.kword!=="")
              location.href=
                `products.html?kwords=${this.kword}`;
          },
          signout(){
            $.ajax({
              url:"http://localhost:3000/users/signout",
              type:"get",
              success:()=>{       
                this.islogin=false 
              }
            })
          }  
		    }   
				
			})
			}
	})	
	})
			//替换: $旧.replaceWith($新元素)  //return $旧
      		//$新元素.replaceAll(旧)     //return $新元素
      	//点击搜索图标链接到products.html页面
      	//1.查找触发事件元素  prev-前一个
      	//var $btnSerach=$("#header>nav>div img"),$input=$btnSerach.parent().prev();
      	//2.绑定事件
      	//$btnSerach.click(function(){
      		//3.查找要修改的元素  val()-表单元素的值
      		//4.修改元素
//    		var kw=$input.val().trim();
//    		if(kw!==""){
//    			location.href=`products.html?kwords=${kw}`;
//    		}
//    	})
      	//键盘回车触发 点击搜索   当键盘按键抬起时触发事件
//    	$input.keyup(function(e){
//    		if(e.keyCode==13){
//    			$btnSerach.click()//模拟触发  相当于鼠标点击事件
//    		}
//    	})
      	//搜索框显搜索信息（关键字）
//    	if(location.search.indexOf("kwords")!=-1){
//    		//如果有关键字 用“=”切割输入的字符串
//    		var kwords=decodeURI(location.search.split("=")[1])
//    		$input.val(kwords)
//    	}
      	
      	//登录接口 点击登录返回当前页面 因为多个页面都有登录接口
      	//1.获取header.html中的登录按钮
//    	$("#btnLogin").click(function(){
//    		//点击完登录链接返回到当前页面
//    		location.href="login.html?back="+location.href;
//    	})
      	//通过返回ok的值判断有没有登录  ok=0(没有登录-显示signout 隐藏下一个兄弟)
      	//登录和注销状态切换
      	//登录——>注销
//    	$.ajax({
//    		url:"http://localhost:3000/users/islogin",
//    		type:"get",
//    		dataType:"json",
//    		success:function(){
//    			if(res.ok==0){
//    				//没有登录
//    				$("#signout").show().next().hide();
//    			}else{
//    				$("#uname").html(res.uname);
//    				$("#signout").hide().next().show();
//    			}
//    		}
//    	})
      	//注销——>登录
//    	$("#btnSignout").click(function(){
//    		$.ajax({
//    			type:"get",
//    			url:"http://localhost:3000/users/signout",
//    			success:function(){
//    				location.reload();
//    			}
//    		});
//    	})
//		}
//	})
//})
