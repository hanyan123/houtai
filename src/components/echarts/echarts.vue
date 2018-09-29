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
	  mounted(){
	  	let _self = this
	  	setTimeout(function (){
	  		_self.drawLine();
	  	},0)
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