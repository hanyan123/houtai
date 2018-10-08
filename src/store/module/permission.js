import { commRouter, pemissionRouter } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles,route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) >= 0)
  } else {
    return true
  }
}
/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param permission
 * @param roles
 */
function filterAsyncRouter(permission, roles) {
  const accessedRouters = permission.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permissions = {
  state: {
    routers: commRouter,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state,routers) => {
      state.addRouters = routers
      state.routers = commRouter.concat(routers)//可访问路由表
    }
  },
  actions: {
  	GenerateRoutes({ commit }, data) {
  		return new Promise(resolve => {
  			const { roles } = data;
  			let accessedRouters;
  			if(roles.indexOf('admin')>0){
  				accessedRouters = pemissionRouter
  			} else {
  				accessedRouters = filterAsyncRouter(pemissionRouter, roles)
  			}
  			commit('SET_ROUTERS',accessedRouters);
  			resolve();
  		})

//    return new Promise(resolve => {
//      const { roles } = data
//      let accessedRouters
//      if (roles.indexOf('admin') >= 0) {
//        accessedRouters = pemissionRouter
//      } else {
//        accessedRouters = filterAsyncRouter(pemissionRouter, roles)
//      }
//      commit('SET_ROUTERS', accessedRouters)
//      resolve()
//    })
    }

  }
}

export default permissions