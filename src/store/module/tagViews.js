const tagsViews = {
	state:{
		visitedViews:[]
	},
	mutations:{
		ADD_TAG_VIEWS:(state, view) => {
			if(state.visitedViews.some(v => v.path === view.path)) return
			state.visitedViews.push(Object.assign({}, view, {
	        title: view.meta.title || 'no-name'
	      }))
			console.log(state.visitedViews)
		},
		DEL_TAG:(state, view)=>{
			for (const [i, v] of state.visitedViews.entries()){
				if(v.path===view.path){
					state.visitedViews.splice(i,1)
		          	break
				}
			}
		}
	},
	actions:{
		addVisitedViews({ commit },view){
			console.log(view)
			commit('ADD_TAG_VIEWS',view)
		},
		delVisitedViews({commit,state},view){
			return new Promise((resolve) => {
		        commit('DEL_TAG', view)
		        resolve([...state.visitedViews])
		   	})
		},
	}
}

export default tagsViews
