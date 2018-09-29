import { getToken, setToken, removeToken ,getUserInfo } from '@/unit/auth'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const user = {
	state:{
		roles:[],
		token:getToken(),
		name:"",
	},
	mutations:{
		SET_ROLES:(state,roles)=>{
			state.roles = roles
		},
		SET_TOKEN:(state, token) => {
	      	state.token = token
	      	console.log(token)
	   },
	    SET_NAME:(state,name)=>{
	    	state.name = name
	    }
	},
	actions:{
		setUserInfo({ commit },token){
			commit('SET_TOKEN',token)
		},
		getUserInfo({ commit },data){
			return new Promise((resolve, reject) => {
	    		var url = "https://easy-mock.com/mock/5b84c7c9f7615d46c8184ae3/app/getinfo?name="+getToken()
	    		var params = new URLSearchParams();
				params.append('name', getToken());
				Vue.axios.post(url,params,{emulateJSON : true  //这行最关键。题外话：我们是选项体，也就是文档里的[options]
}).then(function (response) {
					var res = response.data
					console.log(res)
					if (res.data.roles && res.data.roles.length > 0) {
						commit('SET_ROLES', res.data.roles)
						commit('SET_NAME', res.data.name)
					} else {
						reject('getInfo: roles must be a non-null array !')
					}
					resolve(response.data)
				}).catch(res => {
					console.log(res)
			      reject(res)
			    });
		    })
		},
	    LogOut(res) {
	    	return new Promise(resolve => {
	    		res.commit('SET_TOKEN', '')
		        res.commit('SET_ROLES', [])
		        removeToken();
		        resolve()
	    	})
	    },
	    FedLogOut({ commit }) {
	      return new Promise(resolve => {
	        commit('SET_TOKEN','')
	        removeToken()
	        resolve()
	      })
	    }
	}
}
export default user