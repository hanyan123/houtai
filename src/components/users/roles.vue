<template>
	<div style="padding-top: 20px;">
		<Form :model="formItem" :label-width="80" title="我的资料" inline>
	        <FormItem label="登录名">
	             <Input v-model="formItem.input1" style="width:200px" placeholder=""></Input>
	        </FormItem>
	        <FormItem label="手机号">
	             <Input v-model="formItem.input2" style="width:200px" placeholder=""></Input>
	        </FormItem>
	        <FormItem label="邮箱">
	             <Input v-model="formItem.input3" style="width:200px" placeholder=""></Input>
	        </FormItem>
	        <FormItem label="角色">
	            <Select v-model="formItem.otherList" style="width:200px">
			        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
			    </Select>
	        </FormItem>
	        <Button type="primary" icon="ios-search">Search</Button>
		</Form>
		<div class="tables">
			<div class="actions" style="padding: 0 20px ;">
				<Button @click="handleDelet">删除</Button>
        		<Button @click="handleAdd">添加</Button>
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
		        <!--<FormItem label="ID">
		             <Input v-model="changeItem.ID" style="width:200px" placeholder=""></Input>
		        </FormItem>-->
		        <FormItem label="登录名">
		             <Input v-model="changeItem.name" style="width:200px" placeholder=""></Input>
		        </FormItem>
		        <FormItem label="电话">
		             <Input v-model="changeItem.phone" style="width:200px" placeholder=""></Input>
		        </FormItem>
		        <FormItem label="邮箱">
		             <Input v-model="changeItem.eamil" style="width:200px" placeholder=""></Input>
		        </FormItem>
		        <FormItem label="角色">
		            <Select v-model="changeItem.role" style="width:200px">
				        <Option v-for="item in otherList" :value="item.value" :key="item.value">{{ item.label }}</Option>
				    </Select>
		        </FormItem>
			</Form>
	    </Modal>
	    <Modal
	        title="Title1"
	        v-model="modalShow1"
	        :closable="false"
	        >
	        <Form :model="formItem" :label-width="80" title="我的资料" :rules="ruleInline">
		        <!--<FormItem label="ID">
		             <Input v-model="changeItem.ID" style="width:200px" placeholder=""></Input>
		        </FormItem>-->
		        <FormItem prop="name" label="登录名">
		             <Input v-model="addItem.name" style="width:200px" placeholder=""></Input>
		        </FormItem>
		        <FormItem prop="phone" label="电话">
		             <Input v-model="addItem.phone" style="width:200px" placeholder=""></Input>
		        </FormItem>
		        <FormItem prop="eamil" label="邮箱">
		             <Input v-model="addItem.eamil" style="width:200px" placeholder=""></Input>
		        </FormItem>
		        <FormItem prop="role" label="角色">
		            <Select v-model="addItem.role" style="width:200px">
				        <Option v-for="item in otherList" :value="item.value" :key="item.value">{{ item.label }}</Option>
				    </Select>
		        </FormItem>
			</Form>
			<!--插入自定义按钮，可以组织模块狂关闭-->
			<div slot="footer">
			   	<Button type="text" size="large" @click="modalShow1=false">取消</Button>
			   	<Button type="primary" size="large" @click="addOk">确定</Button>
			</div>
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
                    role:'',
              	},
              	changeItem:{
              		name:"",
              		phone:"",
              		eamil:"",
              		role:"",
              	},
              	addItem:{
              		name:"",
              		phone:"",
              		eamil:"",
              		role:"",
              	},
              	ruleInline: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '请输入电话', trigger: 'blur' },
                        //{ type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ],
                    eamil:[
                    	{ required: true, message: '请输入邮箱', trigger: 'blur' },
                    ],
                    role:[
                    	{ required: true, message: '请输入邮箱', trigger: 'blur' },
                    ]
                },
              	selecttions:[],
              	cityList: [
                    {
                        value: '超级管理员',
                        label: '超级管理员',
                        disabled:false
                    },
                    {
                        value: '管理员',
                        label: '管理员',
                        disabled:false
                    },
                    {
                        value: '编辑',
                        label: '编辑',
                        disabled:false
                    },
                    {
                        value: '运营人员',
                        label: '运营人员',
                        disabled:false
                    },
                    {
                        value: '纠错员',
                        label: '纠错员',
                        disabled:false
                    },
                    {
                        value: '采购员',
                        label: '采购员',
                        disabled:false
                    }
                ],
                otherList: [
                    {
                        value: '超级管理员',
                        label: '超级管理员',
                        disabled:false
                    },
                    {
                        value: '管理员',
                        label: '管理员',
                        disabled:false
                    },
                    {
                        value: '编辑',
                        label: '编辑',
                        disabled:false
                    },
                    {
                        value: '运营人员',
                        label: '运营人员',
                        disabled:false
                    },
                    {
                        value: '纠错员',
                        label: '纠错员',
                        disabled:false
                    },
                    {
                        value: '采购员',
                        label: '采购员',
                        disabled:false
                    }
                ],
              	Title:"编辑用户",
              	Title:"添加用户",
              	modalShow:false,
              	modalShow1:false,
              	columns2: [
              		{
                        type: 'selection',
                        align: 'center',
                        fixed: 'left',
                        width:60
                   },
                    {
                        title: 'ID',
                        key: 'ID',
                    },
                    {
                        title: '登录名',
                        key: 'name',
                    },
                    {
                        title: '手机',
                        key: 'phone',
                    },
                    {
                        title: '邮箱',
                        key: 'eamil',
                    },
                    {
                        title: '角色',
                        key: 'role',
                    },
                    {
                        title: '加入时间',
                        key: 'addtime',
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small',
                                        
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
                                        size: 'small',
                                        disabled:params.row.name=="admin"?true:false
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
                        name: 'admin',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        role:'超级管理员',
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"02",
                        name: 'common-01',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        role:"管理员",
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },{
                    	ID:"03",
                        name: 'common-02',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        role:'管理员',
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"04",
                        name: 'common-03',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        role:'管理员',
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"05",
                        name: 'common-04',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        role:'管理员',
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"06",
                        name: 'common-05',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        role:'管理员',
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"07",
                        name: 'common-06',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        role:'管理员',
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"08",
                        name: 'common-07',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        role:'管理员',
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"09",
                        name: 'common-08',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        role:'管理员',
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"10",
                        name: 'common-09',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        role:'管理员',
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"11",
                        name: 'common-10',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        role:'管理员',
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"12",
                        name: 'common-11',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        role:'管理员',
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"13",
                        name: 'common-12',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        role:'管理员',
                        ip:"192.168.1.1",
                        addtime: '2018-09-02 12:05',
                    },
                    {
                    	ID:"14",
                        name: 'editor',
                        phone: '13666666666',
                        eamil: '192224565@qq.com',
                        role:'管理员',
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
              		name:info.name,
              		phone:info.phone,
              		eamil:info.eamil,
              		role:info.role,
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
			addOk (){
				if(this.addItem.name==""){
					console.log(111)
					this.$Message.error('请输入用户名');
				} else {
					this.modalShow1 = false
				}
			},
			deletThisMan (index){
				this.data4.splice(index, 1);
			},
			handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            onSelect (selection,row){
            	this.selecttions = selection
            	//console.log(row)
           		//console.log(this.data4.some(item => item.ID==row.ID))
//         		if(this.data4.some(item => item.ID==row.ID)){
//         			console.log(row.ID)
//         		}
            },
            handleAdd (){
            	this.modalShow1=true
            },
            
            handleDelet (){
            	let _self = this
            	if (_self.selecttions.length==0){
            		_self.$Message.warning('请选择想要删除的列表');
            	} else {
            		for (let i = 0; i<_self.data4.length;i++){
            			for (let j = 0; j<_self.selecttions.length;j++){
            				if(_self.data4[i].name==_self.selecttions[j].name){
            					_self.data4.splice(i,1)
            				}
            			}
            		}
//          		for (let [i, v] of _self.data4.entries()){
//          			for (let [m, z] of _self.selecttions.entries()){
//          				if(v.name == z.name){
//          					//console.log(i)
//          					_self.data4.splice(m,1)
//          				}
//          			}
//          		}
            	}
            },
            onSelectAll (selection){
            	this.selecttions = selection
            	console.log(selection)
            },
            onSelectionChange (selection){
            	this.selecttions = selection
//          	for(var i = 0;i< this.data4.length;i++){
//          		for(var j = 0;j< selection.length;j++){
//          			if(this.data1[i].name==selection[j].name){
//          				console.log(i)
//          			}
//          		}
//          	}
            }
		}
	}
</script>

<style scoped="scoped">
	/*.ivu-icon-ios-arrow-down{ bottom: auto !important;}*/
</style>