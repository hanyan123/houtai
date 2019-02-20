<template>
	<div>
		还款中
		<Button type="primary" @click="showPlugin">Primary</Button>
	</div>
</template>

<script>
export default {
	data (){
		return {

		}
	},
	methods:{
		showPlugin(){
			this.jumpNext('3333')
		}
	}
}


</script>

<style>
</style>