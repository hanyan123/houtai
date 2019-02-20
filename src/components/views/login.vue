<template>
	<div class="login" style="height: 100%;">
		<div class="welcome"><img src="http://www.17sucai.com/preview/266121/2017-06-30/login/images/welcome.png"></div>
		<div class="login-form">
			<div class="login-inp"><label>登录</label><input v-model="userName" type="text" placeholder=""></div>
			<div class="login-inp"><label>密码</label><input v-model="passWord" type="password" placeholder=""></div>
			<div class="login-inp"><a href="javascript:;" @click="userLogin">立即登录</a></div>
		</div>
		{{userinfo}}
		<div class="login-txt"><a href="#">立即注册</a>|<a href="#">忘记密码？</a></div>
	</div>
</template>

<script>
	import { getToken, setToken, removeToken } from '@/unit/auth'
	export default {
	  	data() {
		    return {
		      	userName: 'admin',
		      	passWord: '11111',
		    }
	  	},
	    methods:{
	    	userLogin(){
	    		//Loading.service({ fullscreen: true });
				var _self = this;
				var params = new URLSearchParams();
				params.append('name', _self.userName);
				var url = "https://easy-mock.com/mock/5b84c7c9f7615d46c8184ae3/app/login?name="+_self.userName
				_self.axios.get(url,{emulateJSON : true  //这行最关键。题外话：我们是选项体，也就是文档里的[options]
}).then(function (response) {
					var res = response.data
					console.log(response.data);
					setToken(response.data.data.token);
					//用户信息存到本地
					localStorage.setItem("userinfo",JSON.stringify(response.data.data))
					_self.$store.dispatch('setUserInfo',response.data).then(() => {
						console.log('登录成功')
			            _self.$router.push({ path: '/' })
			        }).catch((err) => {
			            console.log(err)
			        })
				}).catch(function (error) {
				　　  alert(error);
				});
	    	}
	   },
	   computed:{
	   		userinfo (){
	   			return this.userName
	   		}
	   }
	}
</script>

<style>
@charset "utf-8";
html,body,div,p,form,label,ul,li,dl,dt,dd,ol,img,button,b,em,strong,small,h1,h2,h3,h4,h5,h6{margin:0;padding:0;border:0;list-style:none;font-style:normal;}
body{font-family:SimHei,'Helvetica Neue',Arial,'Droid Sans',sans-serif;font-size:14px;color:#333;background:#f2f2f2;}
a, a.link{color:#666;text-decoration:none;font-weight:500;}
a, a.link:hover{color:#666;}
h1,h2,h3,h4,h5,h6{font-weight: normal;}

.login{width:100%;height:100%;background:url(http://www.17sucai.com/preview/266121/2017-06-30/login/images/login-bg.png) no-repeat;background-size:cover;}
.welcome{width:100%;padding:120px 0;}
.welcome img{width:100%;}
.login-inp{margin:0 30px 15px 30px;border:1px solid #fff;border-radius:25px;}
.login-inp label{width:4em;text-align:center;display:inline-block;color:#fff;}
.login-inp input{line-height:40px;color:#fff;background-color:transparent;border:none;outline: none; width: 66%;}
.login-inp a{display:block;width:100%;text-align:center;line-height:40px;color:#fff;font-size:16px;letter-spacing:5px;}
.login-txt{text-align:center;color:#fff;}
.login-txt a{color:#fff;padding:0 5px;}                                                                                             

</style>