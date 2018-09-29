<template>
	<div>
		<div class="layui-card-header">设置我的资料</div>
		<div class="fromArea">
			<Form :model="formItem" :label-width="80" title="我的资料">
		        <FormItem label="我的角色">
		            <Select v-model="formItem.model1" style="width:200px">
				        <Option v-for="item in rolesList" :value="item.value" :key="item.value" :disabled="item.disabled">{{ item.label }}</Option>
				    </Select>
				    <span class="tip">
				    	当前角色不可更改为其它角色
				    </span>
		        </FormItem>
		        <FormItem label="用户名">
		             <Input v-model="formItem.input" style="width:200px" placeholder="请输入用户名"></Input>
		        </FormItem>
		        <FormItem label="昵称">
		             <Input v-model="formItem.input1" style="width:200px" placeholder="请输入昵称"></Input>
		        </FormItem>
		        <FormItem label="性别">
		            <RadioGroup v-model="formItem.radio">
		                <Radio label="男">男</Radio>
		                <Radio label="女">女</Radio>
		            </RadioGroup>
		        </FormItem>
		        <FormItem label="手机">
		             <Input v-model="formItem.phone" style="width:200px" placeholder=""></Input>
		        </FormItem>
		        <FormItem label="邮箱">
		             <Input v-model="formItem.email" style="width:200px" placeholder=""></Input>
		        </FormItem>

		        <FormItem label="备注">
		            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入备注"></Input>
		        </FormItem>
		        <FormItem>
		            <Button type="primary">Submit</Button>
		            <Button style="margin-left: 8px">Cancel</Button>
		        </FormItem>
		    </Form>
		</div>
		
	</div>
	
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    model1: '超级管理员',
                    input:'emmili',
                    input1:'闲心',
                    select: '',
                    radio: '女',
                    checkbox: [],
                    switch: true,
                    date: '',
                    phone:'',
                    email:'',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
                rolesList: [
                    {
                        value: '超级管理员',
                        label: '超级管理员',
                        disabled:false
                    },
                    {
                        value: '普通管理员',
                        label: '普通管理员',
                        disabled:true
                    },
                    {
                        value: '审核员',
                        label: '审核员',
                        disabled:true
                    },
                    {
                        value: '编辑人员',
                        label: '编辑人员',
                        disabled:true
                    }
                ],
                model1: ''
            }
        }
    }
</script>
<style>
	.ivu-icon-ios-arrow-down{ bottom: auto;}
	.ivu-layout-content{
		/*margin: 0 !important;*/
	}
	.layui-card-header{
		position: relative;
    height: 42px;
    line-height: 42px;
    padding: 0 15px;
    border-bottom: 1px solid #f6f6f6;
    color: #333;
    border-radius: 2px 2px 0 0;
    font-size: 14px;
	}
	.fromArea{padding: 20px;}
	.tip{ color: #515a6e; margin-left: 30px; font-size: 14px;}
</style>