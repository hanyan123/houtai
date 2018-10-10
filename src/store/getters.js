const getters = {
  	token: state => state.user.token,
 		roles:state =>state.user.roles,
  	permission_routers: state => state.permissions.routers,
  	addRouters: state => state.permissions.addRouters,
  	visitedViews:state=>state.tagsViews.visitedViews
}
export default getters