import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import permissions from './module/permission'
import tagsViews from './module/tagViews'
import getters from './getters'
Vue.use(Vuex);
const store = new Vuex.Store({
	modules:{
		user,
		permissions,
		tagsViews
	},
	getters
})

export default store
