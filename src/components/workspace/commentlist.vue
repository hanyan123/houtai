<template>
	<div style="padding-top: 20px;">
		<Form :model="formItem" :label-width="80" title="我的资料" inline>
	        <FormItem label="ID">
	             <Input v-model="formItem.input1" style="width:200px" placeholder=""></Input>
	        </FormItem>
	        <FormItem label="回帖人">
	             <Input v-model="formItem.input2" style="width:200px" placeholder=""></Input>
	        </FormItem>
	        <FormItem label="回帖内容">
	             <Input v-model="formItem.input3" style="width:200px" placeholder=""></Input>
	        </FormItem>        
	        <Button type="primary" icon="ios-search">Search</Button>
		</Form>
		<div class="tables">
			<div class="actions" style="padding: 0 20px ;">
				<Button @click="handleSelectAll(true)">全选</Button>
        		<Button @click="handleSelectAll(false)">取消全选</Button>
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
	        <Form :model="formItem" :label-width="80" title="我的资料">
		        <FormItem label="回帖内容" prop="desc">
		            <Input v-model="changeItem.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder=""></Input>
		        </FormItem>
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
                    radio: '',
              	},
              	changeItem:{
              		ID:"",
              		content:""
              	},
              	Title:"编辑内容",
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
                        title: '回帖人',
                        key: 'name',
                        width:200
                    },
                    {
                        title: '头像',
                        key: 'avatar',
                        width:200
                    },
                    {
                        title: '回帖ID',
                        key: 'commentID',
                        width:200,
                        sortable: true
                    },
                    {
                        title: '回帖内容',
                        key: 'content',
                        width:200,
                        render: (h, params) => {
                            return h('span',{
                            	on: {
                                    click: () => {
                                        this.showMessage(params.row)
                                    }
                                }
                            },params.row.content);
                        }
                    },
                    {
                        title: '回帖时间',
                        key: 'addtime',
                        width:200
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
                                        	//console.log(params.row)
                                            this.editThisMan(params.row)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.deletThisMan(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data4: [
                    {
                    	ID:"01",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        commentID: '1001',
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"02",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        commentID: '1002',
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"03",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        commentID: '1003',
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"04",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        commentID: '1004',
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"05",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        commentID: '1005',
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"06",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        commentID: '1006',
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"07",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        commentID: '1007',
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"08",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        commentID: '1008',
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"09",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        commentID: '1009',
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                    },
                ]
			}
		},
		methods:{
			editThisMan (info){
				this.modalShow=true;
				this.changeItem = {
              		ID:info.ID,
              		content:info.content
              		//name:info.name,
              		//phone:info.phone,
              		//eamil:info.eamil,
              		//male:info.male,
              	}
			},
			changeOk (){
				for (let i = 0;i<this.data4.length;i++){
					if(this.changeItem.ID==this.data4[i].ID){
						this.data4[i].ID=this.changeItem.ID
						this.data4[i].content=this.changeItem.content
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
            showMessage (index){
            	console.log(index)
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