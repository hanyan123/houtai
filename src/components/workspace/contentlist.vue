<template>
	<div style="padding-top: 20px;">
		<Form :model="formItem" :label-width="80" title="我的资料" inline>
	        <FormItem label="ID">
	             <Input v-model="formItem.input1" style="width:200px" placeholder=""></Input>
	        </FormItem>
	        <FormItem label="发帖人">
	             <Input v-model="formItem.input2" style="width:200px" placeholder=""></Input>
	        </FormItem>
	        <FormItem label="发帖内容">
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
	        <Form :model="changeItem" :label-width="80" title="我的资料">
		        <FormItem label="回帖内容" prop="desc">
		            <Input v-model="changeItem.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder=""></Input>
		        </FormItem>
		        <FormItem label="置顶" prop="zhiding" >
		            <i-switch size="large" @on-change="changeStatus" v-model="changeItem.zhiding">
				        <span slot="open">ON</span>
				        <span slot="close">OFF</span>
				    </i-switch>
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
              		content:"",
              		zhiding:false
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
                        title: '发帖人',
                        key: 'name',
                        width:200
                    },
                    {
                        title: '头像',
                        key: 'avatar',
                        width:200
                    },
                    {
                    	title:'帖子标题',
                    	key: 'contenttitle',
                        width:200,
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
                                    },
                                },
                                style: {
                                    cursor: 'pointer',
                                    color: 'red',
                                },
                            },params.row.content);
                        }
                    },
                    {
                        title: '发帖时间',
                        key: 'addtime',
                        width:200
                    },
                    {
                        title: '置顶操作',
                        key: 'settop',
                        width:200,
                        render: (h, params) => {
                        	if(!params.row.settop){
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
	//                                      click: () => {
	//                                          this.editThisMan(params.row)
	//                                      }
	                                    }
	                                }, '正常显示')
	                            ]);
                        	} else {
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
	//                                      click: () => {
	//                                          this.editThisMan(params.row)
	//                                      }
	                                    }
	                                }, '置顶')
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
                    	ID:"1001",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        contenttitle:"世界有多大",
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                        settop:true
                    },
                    {
                    	ID:"1002",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        contenttitle:"世界有多大1",
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                        settop:false
                    },
                    {
                    	ID:"1003",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        contenttitle:"世界有多大",
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                        settop:true
                    },
                    {
                    	ID:"1004",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        contenttitle:"世界有多大1",
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                        settop:false
                    },
                    {
                    	ID:"1005",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        contenttitle:"世界有多大",
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                        settop:true
                    },
                    {
                    	ID:"1006",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        contenttitle:"世界有多大1",
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                        settop:false
                    },
                    {
                    	ID:"1007",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        contenttitle:"世界有多大",
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                        settop:true
                    },
                    {
                    	ID:"1008",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        contenttitle:"世界有多大1",
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                        settop:false
                    },
                    {
                    	ID:"1009",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        contenttitle:"世界有多大",
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                        settop:true
                    },
                    {
                    	ID:"1010",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        contenttitle:"世界有多大1",
                        content:"呵呵，这世界有多大，我想去走走",
                        addtime: '2018-09-02 12:05',
                        settop:false
                    },
                ]
			}
		},
		methods:{
			changeStatus (status){
				this.changeItem.zhiding=status;
			},
			editThisMan (info){
				this.modalShow=true;
				this.changeItem = {
              		ID:info.ID,
              		content:info.content,
              		zhiding:info.settop
              	}
				console.log(this.changeItem)
			},
			changeOk (){
				console.log(this.changeItem)
				for (let i = 0;i<this.data4.length;i++){
					if(this.changeItem.ID==this.data4[i].ID){
						this.data4[i].ID=this.changeItem.ID
						this.data4[i].content=this.changeItem.content
						this.data4[i].settop=this.changeItem.zhiding
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
            	//console.log(selection)
            	for(var i=0;i< this.data4.length;i++){
            		for(var j=0;j< selection.length;j++){
            			if(this.data4[i].name==selection[j].name){
            				console.log(i)
            			}
            		}
            	}
            }
		}
	}
</script>

<style scoped="scoped">
	/*.ivu-icon-ios-arrow-down{ bottom: auto !important; cursor: pointer; }*/
</style>