<template>
	<div style="padding: 60px;">
		<Form :model="formLeft" label-position="left" :label-width="100"  style="width:300px">
	        <FormItem label="请输入旧密码">
	            <Input v-model="formLeft.input1"></Input>
	        </FormItem>
	        <FormItem label="请输入新密码">
	            <Input v-model="formLeft.input2"></Input>
	        </FormItem>
	        <FormItem label="重新输入">
	            <Input v-model="formLeft.input3"></Input>
	        </FormItem>
	    </Form>
	    <div><Button type="primary">确定</Button></div>
	</div>
</template>

<script>
	export default {
        data () {
            return {
                formLeft: {
                    input1: '',
                    input2: '',
                    input3: ''
                }
            }
        }
    }
</script>

<style>
</style>