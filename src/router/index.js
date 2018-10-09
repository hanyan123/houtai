import Vue from 'vue'
import Router from 'vue-router'
import LayOut from '@/components/LayOut'
import index from '@/components/index/index'
import charts from '@/components/echarts/charts'
import admin from '@/components/pemission/admin'
import editor from '@/components/pemission/editor'
import addGoods from '@/components/goodsmam/addGoods'
import add from '@/components/goodsmam/add'
import goodslist from '@/components/goodsmam/goodslist'
import loanmager from '@/components/loanmamager/loanmager'
import tendering from '@/components/loanmamager/tendering'
import loan from '@/components/loanmamager/index'
import quilleditor from '@/components/editor/quilleditor'
import markdown from '@/components/editor/markdown'
import set from '@/components/shezhi/set'
import userset from '@/components/shezhi/userset'
import website from '@/components/shezhi/website'
import userlist from '@/components/users/userlist'
import roles from '@/components/users/roles'
import administrators from '@/components/users/administrators'
import repassword from '@/components/shezhi/repassword'
import worklist from '@/components/workspace/worklist'
import community from '@/components/workspace/community'
import commentlist from '@/components/workspace/commentlist'
Vue.use(Router)


export const commRouter = [
	{ path: '/login', component: () => import('@/components/views/login'), hidden: true },
    {
		path:'/',
		component:LayOut,
		redirect:"/index",
		name:"首页",
		meta:{
			index:"1",
			icon:"md-home"
		},
		children: [{
	      path: '/index',
	      component: index,
	      name: '首页',
	      meta:{
	      	open:["1"],
	      	index:"1-1",
	      	
	      }
	    }]
	},
	{
		path:'/',
		component:LayOut,
		redirect:"/charts",
		meta:{
			index:"2",
			icon:"md-text"
		},
		name:"图表",
		children: [{
	      path: '/charts',
	      component: charts,
	      name: '图表',
	      meta:{
	      	open:["2"],
	      	index:"2-1",
	      	icon:"md-home"
	      }
	    }]
	},
	{
		path:'/',
		component:LayOut,
		redirect:"/loan",
		name:"借款管理",
		meta:{
			index:"6",
			icon:"ios-thunderstorm"
		},
		children: [{
		      path: '/loan',
		      component: loan,
		      name: '借款管理',
		      redirect:"/loan/index",
		      meta:{
		      	index:"7",
		      	icon:"md-home"
		      },
		      children:[ 
		      	{path: '/loan/index',component: loanmager, name: '借款管理',meta:{open:["6","7"],index:"7-1"}},
			    {path: '/loan/tendering',component: tendering,name: '还款中的借款',meta:{open:["6","7"],index:"7-2"}},
			    {path: '/loan/reimbursement',component: () => import('@/components/loanmamager/reimbursement'),name: '已还款的借款',meta:{open:["6","7"],index:"7-3"} }
		      ]
	    }]
	},
	{
		path:'/',
		component:LayOut,
		redirect:"/quilleditor",
		meta:{
			index:"8",
			icon:"ios-timer"
		},
		name:"编辑器",
		children: [{
	      path: '/quilleditor',
	      component: quilleditor,
	      name: '编辑器',
	      meta:{
	      	open:["8"],
	      	index:"8-1",
	      }
	    },{
	      path: '/markdown',
	      component: markdown,
	      name: 'markdown编辑器',
	      meta:{
	      	open:["8"],
	      	index:"8-2",
	      }
	    }]
	},
	{
		path:'/',
		component:LayOut,
		redirect:"/userlist",
		meta:{
			index:"12",
			icon:"ios-people"
		},
		name:"用户",
		children: [{
	      path: '/userlist',
	      component: userlist,
	      name: '用户列表',
	      meta:{
	      	open:["12"],
	      	index:"12-1",
	      }
	    },{
	      path: '/administrators',
	      component: administrators,
	      name: '管理员设置',
	      meta:{
	      	open:["12"],
	      	index:"12-2",
	      }
	    },{
	      path: '/roles',
	      component: roles,
	      name: '权限设置',
	      meta:{
	      	open:["12"],
	      	index:"12-3",
	      }
	    }]
	},
	{
		path:'/',
		component:LayOut,
		redirect:"/workspace",
		meta:{
			index:"13",
			icon:"ios-people"
		},
		name:"应用",
		children: [{
	      path: '/worklist',
	      component: worklist,
	      name: '工单系统',
	      meta:{
	      	open:["13"],
	      	index:"13-1",
	      }
	    },{
	      path: '/community',
	      component: community,
	      name: '社区系统',
	      meta:{
	      	index:"14",
	      },
	      children:[
	      		{
		      		path: '/commentlist',
			      	component: commentlist,
			      	name: '回帖列表',
			     	meta:{
			      	open:['13',"14"],
			      	index:"14-1",
		      		}
		    	} 	
	      	]
	    }]
	},
	{
		path:'/',
		component:LayOut,
		redirect:"/set",
		name:"设置",
		meta:{
			index:"9",
			icon:"ios-thunderstorm"
		},
		children: [{
		      path: '/set',
		      component: set,
		      name: '系统设置',
		      redirect:"/set/userset",
		      meta:{
		      	index:"10",
		      	icon:"md-home"
		      },
		      children:[ 
		      	{path: '/set/website',component: website, name: '网站设置',meta:{open:["9","10"],index:"10-1"}},
		      ]
	    },{
		    path: '/set',
		    component: set,
		    name: '个人设置',
		    redirect:"/set/userset",
		    meta:{
		      	index:"11",
		      	icon:"md-home"
		    },
	      	children:[ 
	      		{path: '/set/userset',component: userset, name: '修改资料',meta:{open:["9","11"],index:"11-1"}},
	      		{path: '/set/repassword',component: repassword, name: '修改密码',meta:{open:["9","11"],index:"11-2"}},
	     	]
	    }]
	}
  ]

export const pemissionRouter = [
    {
		path:'/',
		component:LayOut,
		redirect:"/admin",
		meta:{
			index:"3",
			icon:"md-trophy"
		},
		name:"超级管理员",
		children: [{
		      path: '/admin',
		      component: admin,
		      name: '超级管理员',
		      meta: {
		        title: 'admin',
		        roles: ['admin'],
		        open:["3"],
		        index:"3-1",
		      }
		    },{
		      path: '/goodsmag',
		      component: addGoods,
		      name: '商品管理',
		      redirect:"/goodsmag/add",
		      meta: {
		        title: 'goodsmag',
		        roles: ['admin'],
		        index:"5",
	      	},
	      	children: [
              {path: '/goodsmag/add',component:add,name: '添加商品', meta: { title: 'addgoods',roles: ['admin'],open:["3","5"],index:"5-1"}},
              {path: '/goodsmag/goodslist', component: goodslist,name: '添加列表', meta: {title: 'goodslist',roles: ['admin'],open:["3","5"],index:"5-2"}}
            ]
	    }]
	},
	{
		path:'/',
		component:LayOut,
		redirect:"/editor",
		meta:{
			index:"4",
			icon:"logo-usd"
		},
		name:"小管理员",
		children: [{
	      path: '/editor',
	      component: editor,
	      name: '小管理员',
	      meta: {
	        title: 'editor',
	        roles: ['admin','editor'],
	        open:["4"],
	        index:"4-1",
	      }
	    }]
	},
	//{ path: '*', redirect: '/404', hidden: true }
  ]


export default new Router({
  routes: commRouter
})
