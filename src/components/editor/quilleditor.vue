<template>
	<div>
		<quill-editor 
	      v-model="content" 
	      ref="myQuillEditor" 
	      :options="editorOption" 
	      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
	      @change="onEditorChange($event)" style="height:400px">
	    </quill-editor>
	</div>
		
</template>

<script>
	import { quillEditor } from 'vue-quill-editor'
	export default{
        data(){
            return {
                content:"<h2>请输入编辑内容</h2>",
                editorOption:{
                	//modules:{
                        //toolbar:[
                          //['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                           //['blockquote', 'code-block']
                        //]
                   // }
                }
            }
        },
        methods:{
            onEditorBlur(content){//失去焦点事件
            	console.log(this.content)
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件
            }
        }
    }
</script>

<style>
	.ql-container{ height: 334px;}
</style>