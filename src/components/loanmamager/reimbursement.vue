<template>
    <div>
        <Table border ref="selection" :columns="columns4" :data="data1" @on-selection-change="selectChange" @on-select="selectOne" @on-select-all="selectAll"></Table>
        <Button @click="handleSelectAll(true)">Set all selected</Button>
        <Button @click="handleSelectAll(false)">Cancel all selected</Button>
        <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> Export source data</Button>
	    <Button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> Export sorting and filtered data</Button>
	    <Button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> Export custom data</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'id',
                        key: 'id'
                    },
                    {
                        title: '还款期数',
                        key: 'periods'
                    },
                    {
                        title: '借款人用户名',
                        key: 'loanman'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '标题',
                        key: 'loantitle'
                    },
                    {
                        title: '借款金额',
                        key: 'moneycount'
                    },
                    {
                        title: '手续费',
                        key: 'usemoney'
                    },
                    {
                        title: '借款利息',
                        key: 'lixi'
                    },
                    {
                        title: '加息',
                        key: 'addlixi'
                    },
                    {
                        title: '借款期限',
                        key: 'times'
                    },
                    {
                        title: '已还本金',
                        key: 'allreadypay'
                    },
                    {
                        title: '已还利息',
                        key: 'allreadycash'
                    },
                    {
                        title: '还款方式',
                        key: 'payway'
                    },
                    {
                        title: '还款时间',
                        key: 'paytime'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
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
                                            this.show(params.index)
                                        }
                                    }
                                }, '投资人记录'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '担保人')
                            ]);
                        }
                    }
                ],
                data1: [
                    {
                        id: '01',
                        periods:"第一期",
                        loanman: "\t13663071703",
                        name: '你大爷',
                        loantitle: '房融宝1809130941',
                        moneycount: '200000.00',
                        usemoney: '6000.00',
                        lixi:'735.47',
                        addlixi:'0.00',
                        times: '6个月',
                        allreadypay:'3978.4',
                        allreadycash:'764.11',
                        payway: '一次性还款',
                        paytime: '2018-06-06',
                    },
                    {
                        id: '01',
                        periods:"第一期",
                        loanman: "\t13663071703",
                        name: '你大爷',
                        loantitle: '房融宝1809130941',
                        moneycount: '200000.00',
                        usemoney: '6000.00',
                        lixi:'735.47',
                        addlixi:'0.00',
                        times: '6个月',
                        allreadypay:'3978.4',
                        allreadycash:'764.11',
                        payway: '一次性还款',
                        paytime: '2018-06-06',
                    },
                    {
                        id: '01',
                        periods:"第一期",
                        loanman: "\t13663071703",
                        name: '你大爷',
                        loantitle: '房融宝1809130941',
                        moneycount: '200000.00',
                        usemoney: '6000.00',
                        lixi:'735.47',
                        addlixi:'0.00',
                        times: '6个月',
                        allreadypay:'3978.4',
                        allreadycash:'764.11',
                        payway: '一次性还款',
                        paytime: '2018-06-06',
                    },
                    {
                        id: '01',
                        periods:"第一期",
                        loanman: "\t13663071703",
                        name: '你大爷',
                        loantitle: '房融宝1809130941',
                        moneycount: '200000.00',
                        usemoney: '6000.00',
                        lixi:'735.47',
                        addlixi:'0.00',
                        times: '6个月',
                        allreadypay:'3978.4',
                        allreadycash:'764.11',
                        payway: '一次性还款',
                        paytime: '2018-06-06',
                    },
                    {
                        id: '01',
                        periods:"第一期",
                        loanman: "\t13663071703",
                        name: '你大爷',
                        loantitle: '房融宝1809130941',
                        moneycount: '200000.00',
                        usemoney: '6000.00',
                        lixi:'735.47',
                        addlixi:'0.00',
                        times: '6个月',
                        allreadypay:'3978.4',
                        allreadycash:'764.11',
                        payway: '一次性还款',
                        paytime: '2018-06-06',
                    },
                    {
                        id: '01',
                        periods:"第一期",
                        loanman: "\t13663071703",
                        name: '你大爷',
                        loantitle: '房融宝1809130941',
                        moneycount: '200000.00',
                        usemoney: '6000.00',
                        lixi:'735.47',
                        addlixi:'0.00',
                        times: '6个月',
                        allreadypay:'3978.4',
                        allreadycash:'764.11',
                        payway: '一次性还款',
                        paytime: '2018-06-06',
                    },
                    {
                        id: '01',
                        periods:"第一期",
                        loanman: "\t13663071703",
                        name: '你大爷',
                        loantitle: '房融宝1809130941',
                        moneycount: '200000.00',
                        usemoney: '6000.00',
                        lixi:'735.47',
                        addlixi:'0.00',
                        times: '6个月',
                        allreadypay:'3978.4',
                        allreadycash:'764.11',
                        payway: '一次性还款',
                        paytime: '2018-06-06',
                    },
                ]
            }
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data1[index].name}<br>Age：${this.data1[index].age}<br>Address：${this.data1[index].address}`
                })
            },
            remove (index) {
                this.data1.splice(index, 1);
            },
            selectAll (selection){
            	console.log(selection);
            	//this.arrnew = selection
            },
            selectOne (selection,row){
            	console.log(row)
            },
            selectChange (selection){
            	console.log(selection)
            	//this.arrnew = selection
            	for(var i = 0;i< this.data1.length;i++){
            		for(var j = 0;j< selection.length;j++){
            			if(this.data1[i].name==selection[j].name){
            				console.log(i)
            			}
            		}
            	}
            },
            exportData (type) {
                if (type === 1) {
                    this.$refs.selection.exportCsv({
                        filename: 'The original data'
                    });
                } else if (type === 2) {
                    this.$refs.selection.exportCsv({
                        filename: 'Sorting and filtering data',
                        original: false
                    });
                } else if (type === 3) {
//                  this.$refs.selection.exportCsv({
//                      filename: 'Custom data',
//                      columns: this.columns8.filter((col, index) => index < 4),
//                      data: this.data7.filter((data, index) => index < 4)
//                  });
                }
            } 
        }
    }
</script>
