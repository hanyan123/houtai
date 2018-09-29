<template>
	<div style="padding-top: 20px;">
		<Form :model="formItem" :label-width="80" title="我的资料" inline>
	        <FormItem label="ID">
	             <Input v-model="formItem.input1" style="width:200px" placeholder=""></Input>
	        </FormItem>
	        <FormItem label="用户名">
	             <Input v-model="formItem.input2" style="width:200px" placeholder=""></Input>
	        </FormItem>
	        <FormItem label="邮箱">
	             <Input v-model="formItem.input3" style="width:200px" placeholder=""></Input>
	        </FormItem>
	        <FormItem label="性别">
	            <RadioGroup v-model="formItem.radio">
	                <Radio label="男">男</Radio>
	                <Radio label="女">女</Radio>
	            </RadioGroup>
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
	        title="Title"
	        v-model="modalShow"
	        :closable="false"
	        @on-ok="changeOk"
        	
	        >
	        <Form :model="formItem" :label-width="80" title="我的资料">
		        <FormItem label="ID">
		             <Input v-model="changeItem.ID" style="width:200px" placeholder=""></Input>
		        </FormItem>
		        <FormItem label="用户名">
		             <Input v-model="changeItem.name" style="width:200px" placeholder=""></Input>
		        </FormItem>
		        <FormItem label="电话">
		             <Input v-model="changeItem.phone" style="width:200px" placeholder=""></Input>
		        </FormItem>
		        <FormItem label="邮箱">
		             <Input v-model="changeItem.eamil" style="width:200px" placeholder=""></Input>
		        </FormItem>
		        <FormItem label="性别">
		            <Select v-model="changeItem.male" style="width:100px">
				        <Option value="男" key="男">男</Option>
				        <Option value="女" key="女">女</Option>
				    </Select>
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
              		name:"",
              		phone:"",
              		eamil:"",
              		male:"",
              	},
              	Title:"编辑用户",
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
                        title: '用户名',
                        key: 'name',
                        width:200
                    },
                    {
                        title: '头像',
                        key: 'avatar',
                        width:200
                    },
                    {
                        title: '手机',
                        key: 'phone',
                        width:200
                    },
                    {
                        title: '邮箱',
                        key: 'eamil',
                        width:200
                    },
                    {
                        title: '性别',
                        key: 'male',
                        width:200
                    },
                    {
                        title: 'IP',
                        key: 'ip',
                        width:200
                    },
                    {
                        title: '加入时间',
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
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        male:"男",
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"02",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        male:"女",
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },{
                    	ID:"03",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        male:"男",
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"04",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        male:"男",
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"05",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        male:"男",
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"06",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        male:"男",
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"07",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        male:"男",
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"08",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        male:"男",
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"09",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        male:"男",
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"10",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        male:"男",
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"11",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        male:"男",
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"12",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        male:"男",
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"13",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        male:"男",
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"14",
                        name: '小碟',
                        avatar: '/image/aaa/bbb',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        male:"男",
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                ]
			}
		},
		methods:{
			editThisMan (info){
				this.modalShow=true;
				console.log(info.eamil)
				this.changeItem = {
              		ID:info.ID,
              		name:info.name,
              		phone:info.phone,
              		eamil:info.eamil,
              		male:info.male,
              	}
			},
			changeOk (){
				for (let i = 0;i<this.data4.length;i++){
					if(this.changeItem.ID==this.data4[i].ID){
						this.data4[i].ID=this.changeItem.ID
						this.data4[i].name=this.changeItem.name
						this.data4[i].phone=this.changeItem.phone
						this.data4[i].eamil=this.changeItem.eamil
						this.data4[i].male=this.changeItem.male
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