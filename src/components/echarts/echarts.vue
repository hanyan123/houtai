<template>
	<div :id="ids" :style="styles"></div>
</template>

<script>
	import resize from './resize'
	export default {
			mixins: [resize],
	  	props:{
		  	ids:{
		  		type:String
		  	},
		  	options:{
		  		type:Object
		  	},
		  	styles:{
		  		type:Object
		  	}
	  	},
	  	data () {
		    return {
		      	chart:null
		    }
		},
	  created(){
	  	let _self = this
	  	setTimeout(()=>{
			console.log(this.styles)
	  		_self.drawLine();
	  	},100)
	  },
	  methods: {
	    drawLine(){
	        this.chart = this.$echarts.init(document.getElementById(this.ids))
			this.chart.setOption(this.options)
	    }
	  }
	}
</script>

<style>
</style>