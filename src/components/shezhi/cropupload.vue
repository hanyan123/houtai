<template>
	<div style="overflow: hidden;">
		<div class="imgActor">
			<img :src="imgDataUrl">
		</div>
		<Icon type="md-cloud-upload" size="26" style="cursor: pointer;" @click="toggleShow"/>
		<div id="app">
			<my-upload field="img"
		        @crop-success="cropSuccess"
		        @crop-upload-success="cropUploadSuccess"
		        @crop-upload-fail="cropUploadFail"
		        v-model="show"
				:width="300"
				:height="300"
				url="https://easy-mock.com/mock/5b84c7c9f7615d46c8184ae3/app/getinfo?name=admin"
				:params="params"
				:headers="headers"
				:withCredentials="false"
				img-format="png">
			</my-upload>
		</div>
	</div>
</template>

<script>
	//https://www.npmjs.com/package/vue-image-crop-upload
	import myUpload from 'vue-image-crop-upload';
    export default {
    	props:{
//  		show:{
//  			type:Boolean,
//  			default:false
//  		}
    	},
        data () {
            return {
                show: false,
                origin:true,
				params: {
					token: '123456798',
					name: 'avatar'
				},
				headers: {
					smail: '*_~'
				},
				imgDataUrl: '' // the datebase64 url of created image
            }
        },
        components: {
			'my-upload': myUpload
		},
        methods: {
            toggleShow() {
				this.show = !this.show;
			},
			cropSuccess(imgDataUrl, field){
				console.log('-------- crop success --------');
				this.imgDataUrl = imgDataUrl;
			},
			cropUploadSuccess(jsonData, field){
				console.log('-------- upload success --------');
				console.log(jsonData);
				console.log('field: ' + field);
			},
			cropUploadFail(status, field){
				console.log('-------- upload fail --------');
				console.log(status);
				console.log('field: ' + field);
			}
        },
        mounted () {
        	
        }
    }
</script>

<style>
	.imgActor{ width: 52px; float: left; height: 52px; overflow: hidden; border-radius: 4px; margin-right: 20px;}
	.imgActor img{ display: block; width: 100%;}
</style>