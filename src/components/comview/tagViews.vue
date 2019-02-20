<template>
	<div>
		<div class="tagViews">
			<Tag type="border" closable v-for="(item,index) in visitedViews" @on-close="handleClose(item)" :class="isActive(item)?'redColor':''"><router-link :to="{path:item.path}" >{{ item.name }}</router-link></Tag>
		</div>
	</div>	
</template>

<script>
	export default {
		data (){
			return {
				isCollapse:false
			}
		},
		methods:{
			getRoute(){
				if(this.$route.name){
					console.log(this.$route)
					return this.$route
				}
				return false
			},
			addTagViews(){
				const route = this.getRoute();
				if(!route){
					return false
				} 
				this.$store.dispatch('addVisitedViews',route)
			},

			isActive(route) {
		      return route.path === this.$route.path
		    },
			handleClose (view){
				//tagViews.js
				this.$store.dispatch('delVisitedViews',view).then(views => {
					if (this.isActive(view)) {
			          const latestView = views.slice(-1)[0]
			          if (latestView) {
			            this.$router.push(latestView)
			          } else {
			            this.$router.push('/')
			          }
			        }
				})
			}
		},
		created(){
			//console.log(tagsViews)
		},
		
		watch:{
			$route (){
				this.addTagViews();
			}
		},
		
		mounted(){
			this.addTagViews();
		},
		computed:{
			visitedViews(){
				//console.log(this.$store.getters.visitedViews)
				return this.$store.getters.visitedViews
			},
			location(){
				return this.$route.path
			},
			username(){
				return this.$store.state.user.name
			}
		}
	}
</script>

<style>
.localtion{
	float: left;
	color: #666666;
	font-size: 16px;
	line-height: 50px;
	margin-left: 20px;
}
.ivu-tag{ margin-left: 15px; margin-top: 5px;}
.username{
	float: right;
	color: #666666;
	font-size: 16px;
	line-height: 50px;
	margin-right: 20px;
}
a{ text-decoration: none;}
.redColor a{
	color: red !important;
}
.navscare{ width: 30px; height: 30px; float: left; margin: 10px; margin-left: 15px;-webkit-transition: .38s;transition: .38s; -webkit-transform-origin: 50% 50%;transform-origin: 50% 50%;-webkit-transform: rotate(0deg);
    transform: rotate(0deg); cursor: pointer;}


.rotateIn {
	-webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
}

.roleHeader{height: 50px; border-bottom: solid 1px #e6e6e6;}
.tagViews{ height: 34px; border-bottom: solid 1px #e6e6e6;}
.tags{ margin-left: 10px; margin-top: 3px;}
</style>