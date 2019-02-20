// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import iView from 'iview';
import { getToken, setToken, removeToken } from '@/unit/auth'
import store from './store'
import 'iview/dist/styles/iview.css'
import plugin from '../plugin'
//https://www.cnblogs.com/Smiled/p/7686316.html
import echarts from 'echarts'
//https://github.com/hinesboy/mavonEditor markdown编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

//https://github.com/surmon-china/vue-quill-editor
import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(plugin)
Vue.use(VueQuillEditor, /* { default global options } */)
Vue.prototype.$echarts = echarts



function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}
const whiteList = ['/login', '/authredirect']// no redirect whitelist

Vue.use(iView);
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
		iView.LoadingBar.start();
		if(getToken()||getToken()!=null){
				if (to.path === '/login') {
						next({
					    path:'/'
					  });
				} else {
						if(store.getters.roles.length==0){
								store.dispatch('getUserInfo').then(res => { // 拉取user_info
						          const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']
						          //{ roles }相当于{ roles:roles }
						          store.dispatch('GenerateRoutes', { roles:roles }).then(() => { // 根据roles权限生成可访问的路由表
						            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
						            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
						          })
						        }).catch((err) => {
						          store.dispatch('FedLogOut').then(() => {
						          	console.log(err)
						            //Message.error(err || 'Verification failed, please login again')
						            next({ path: '/' })
						          })
						        })
			
					} else {
								// 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
				        if (hasPermission(store.getters.roles, to.meta.roles)) {
				          next()//
				        } else {
				          next({ path: '/401', replace: true, query: { noGoBack: true }})
				        }
			        // 可删 ↑
					}
				}
		}
		else {
			if(to.path!=='/login'){
				next({
			    path:'/login'
			  }) // 否则全部重定向到登录页
			} else {
				next()
			}
	    	
		}
})

router.afterEach(route => {
    iView.LoadingBar.finish();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
