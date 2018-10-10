<template>
	<div style="padding-top: 20px;">
		<Form :model="formItem" :label-width="80" title="工单列表" inline>
	        <FormItem label="ID">
	             <Input v-model="formItem.input1" style="width:200px" placeholder=""></Input>
	        </FormItem>
	        <FormItem label="工单号">
	             <Input v-model="formItem.input2" style="width:200px" placeholder=""></Input>
	        </FormItem>
	        <FormItem label="工单标题">
	             <Input v-model="formItem.input3" style="width:200px" placeholder=""></Input>
	        </FormItem>
	        <FormItem label="业务性质">
	             <Input v-model="formItem.input4" style="width:200px" placeholder=""></Input>
	        </FormItem>
	        <FormItem label="受理人">
	             <Input v-model="formItem.input5" style="width:200px" placeholder=""></Input>
	        </FormItem>
	        
	        <Button type="primary" icon="ios-search">Search</Button>
		</Form>
		<div class="tables">
			<div class="actions" style="padding: 0 20px ;">
				<Button @click="handleSelectAll(true)">Set all selected</Button>
        		<Button @click="handleSelectAll(false)">Cancel all selected</Button>
			</div>
			<div style="padding: 20px;">
				<Table @on-select="onSelect" @on-select-all="onSelectAll" @on-selection-change="onSelectionChange" ref="selection" height="600" border :columns="columns2" :data="data4" style="margin:0 auto ;"></Table>
			</div>
		</div>
		<Modal
	        :title="Title"
	        v-model="modalShow"
	        :closable="false"
	        @on-ok="changeOk"
	        >
	        <Form :model="changeItem" :label-width="80" title="编辑工单">
		        <FormItem label="工单ID">
		             <Input v-model="changeItem.wordID" style="width:200px" placeholder=""></Input>
		        </FormItem>
		        <FormItem label="工单性质">
		             <Input v-model="changeItem.worktype" style="width:200px" placeholder=""></Input>
		        </FormItem>
		        <FormItem label="工单进度">
		             <Input v-model="changeItem.progress" style="width:200px" placeholder=""></Input>
		        </FormItem>
		        <!--<FormItem label="邮箱">
		             <Input v-model="changeItem.eamil" style="width:200px" placeholder=""></Input>
		        </FormItem>-->
		        <!--<FormItem label="性别">
		            <Select v-model="changeItem.male" style="width:100px">
				        <Option value="男" key="男">男</Option>
				        <Option value="女" key="女">女</Option>
				    </Select>
		        </FormItem>-->
			</Form>
	    </Modal>
	</div>
</template>

<script>
	export default {
		data (){
			return {
				formItem: {
                    input2:'',
                    input1:'',
                    input3: '',
                    input4:'',
                    input5:'',
              	},
              	changeItem:{
              		wordID:"",
              		worktype:"",
              		progress:"",
              		
              	},
              	Title:"编辑工单",
              	modalShow:false,
              	columns2: [
              		{
                        type: 'selection',
                        width: 60,
                        align: 'center',
                        fixed: 'left'
                   	},
                    {
                        title: 'ID',
                        key: 'ID',
                        width:200
                    },
                    {
                        title: '工单号',
                        key: 'wordID',
                        width:200
                    },
                    
                    {
                        title: '业务性质',
                        key: 'worktype',
                        width:200
                    },
                    {
                        title: '工单标题',
                        key: 'worktitle',
                        width:200
                    },
                    {
                        title: '进度',
                        key: 'progress',
                        width:200,
                        render: (h, params) => {
                            return h('div', [
                                h('Progress', {
                                    props: {
                                        type: 'primary',
                                        size: 'small',
                                        percent:params.row.progress
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.editThisMan(params.row)
                                        }
                                    }
                                }),
                            ]);
                        }
                    },
                    {
                        title: '提交者',
                        key: 'severname',
                        width:200
                    },
                    {
                        title: '受理人',
                        key: 'acceptname',
                        width:200
                    },
                    {
                        title: '工单状态',
                        key: 'status',
                        width:200,
                        render: (h, params) => {
                        	if(params.row.status==0){
                        		return h('div', [
	                                h('Button', {
	                                    props: {
	                                        type: 'warning',
	                                        size: 'small'
	                                    },
	                                    style: {
	                                        marginRight: '5px'
	                                    },
	                                    on: {
//	                                        click: () => {
//	                                            this.editThisMan(params.row)
//	                                        }
	                                    }
	                                }, '处理中'),
	                            ]);
                        	} else if(params.row.status==1) {
                        		return h('div', [
	                                h('Button', {
	                                    props: {
	                                        type: 'primary',
	                                        size: 'small'
	                                    },
	                                    style: {
	                                        marginRight: '5px'
	                                    },
	                                    on: {
//	                                        click: () => {
//	                                            this.editThisMan(params.row)
//	                                        }
	                                    }
	                                }, '已完成'),
	                            ]);
                        	} else if(params.row.status==2) {
                        		return h('div', [
	                                h('Button', {
	                                    props: {
	                                        type: 'default',
	                                        size: 'small'
	                                    },
	                                    style: {
	                                        marginRight: '5px'
	                                    },
	                                    on: {
//	                                        click: () => {
//	                                            this.editThisMan(params.row)
//	                                        }
	                                    }
	                                }, '未处理'),
	                            ]);
                        	}
                            
                        }
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 150,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.editThisMan(params.row)
                                        }
                                    }
                                }, '编辑'),
                            ]);
                        }
                    }
                ],
                data4: [
                    {
                    	ID:"01",
                        wordID: '1001',
                        worktype: '公告',
                        worktitle: '移动支付踏入马来西亚，聚合支付紧随其后',
                        progress: 35,
                        severname: '小刘',
                        acceptname:"小美",
                        status:0,
                    },
                    {
                    	ID:"02",
                        wordID: '1002',
                        worktype: '讨论',
                        worktitle: '凡科拖拽式免费建站神器，享双重优惠！',
                        progress: 20,
                        severname: '小刘',
                        acceptname:"小美",
                        status:2,
                    },
                    {
                    	ID:"03",
                        wordID: '1003',
                        worktype: '提问',
                        worktitle: 'DISCUZ的云平台应该彻底完了',
                        progress: 35,
                        severname: '小刘',
                        acceptname:"小美",
                        status:1,
                    },
                    {
                    	ID:"04",
                        wordID: '1004',
                        worktype: '公告',
                        worktitle: '移动支付踏入马来西亚，聚合支付紧随其后',
                        progress: 35,
                        severname: '小刘',
                        acceptname:"小美",
                        status:1,
                    },
                    {
                    	ID:"05",
                        wordID: '1005',
                        worktype: '公告',
                        worktitle: '移动支付踏入马来西亚，聚合支付紧随其后',
                        progress: 35,
                        severname: '小刘',
                        acceptname:"小美",
                        status:2,
                    },
                    {
                    	ID:"06",
                        wordID: '1006',
                        worktype: '公告',
                        worktitle: '移动支付踏入马来西亚，聚合支付紧随其后',
                        progress: 35,
                        severname: '小刘',
                        acceptname:"小美",
                        status:1,
                    },
                ]
			}
		},
		methods:{
			editThisMan (info){
				this.modalShow=true;
				this.changeItem = {
              		wordID:info.wordID,
              		worktype:info.worktype,
              		progress:info.progress,
              	}
			},
			changeOk (){
				for (let i = 0;i<this.data4.length;i++){
					if(this.changeItem.wordID==this.data4[i].wordID){
						this.data4[i].wordID=this.changeItem.wordID
						this.data4[i].worktype=this.changeItem.worktype
						this.data4[i].progress=this.changeItem.progress
					}
				}
			},
			deletThisMan (index){
				this.data4.splice(index, 1);
			},
			handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            onSelect (selection,row){
            	console.log(row)
           		//console.log(this.data4.some(item => item.ID==row.ID))
//         		if(this.data4.some(item => item.ID==row.ID)){
//         			console.log(row.ID)
//         		}
            },
            onSelectAll (selection){
            	console.log(selection)
            },
            onSelectionChange (selection){
            	for(var i = 0;i< this.data4.length;i++){
            		for(var j = 0;j< selection.length;j++){
            			if(this.data1[i].name==selection[j].name){
            				console.log(i)
            			}
            		}
            	}
            }
		}
	}
</script>

<style scoped="scoped">
	/*.ivu-icon-ios-arrow-down{ bottom: auto !important;}*/
</style>