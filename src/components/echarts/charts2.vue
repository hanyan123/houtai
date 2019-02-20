<template>
    <div>
        <div class="headertable">
            <Row :gutter="15">
                <Col span="6">
                    <Card :bordered="false">
                        <p slot="title">访问量</p>
                        <div class="datacontainer">
                            <h3>9,999,666</h3>
                            <p>总计访问量</p>    
                        </div>
                    </Card>
                </Col>
                <Col span="6">
                    <Card :bordered="false">
                        <p slot="title">下载</p>
                        <div class="datacontainer">
                            <h3>9,999,666</h3>
                            <p>新下载用户</p>    
                        </div>
                    </Card>
                </Col>
                <Col span="6">
                    <Card :bordered="false">
                        <p slot="title">收入</p>
                        <div class="datacontainer">
                            <h3>9,999,666</h3>
                            <p>总收入</p>    
                        </div>
                    </Card>
                </Col>
                <Col span="6">
                    <Card :bordered="false">
                        <p slot="title">活跃用户</p>
                        <div class="datacontainer">
                            <h3>9,999,666</h3>
                            <p>最近一个月</p>    
                        </div>
                    </Card>
                </Col>
            </Row>    
        </div>
        <div class="chartstable">
            <Row :gutter="15">
                <Col span="16">
                    <Card :bordered="false">
                        <p slot="title">访问量</p>
                        <div>
                            <echarts :ids="id" :styles="styles4" :options="option"></echarts>
                        </div>
                    </Card>
                </Col>
                <Col span="8">
                    <div style="background:#fff;">
                        <h3 style="padding-bottom: 10px;
    font-size: 20px;
    color: #666;
    line-height: 24px; padding-top:10px; padding-left:15px">
                            月访问数
                        </h3>
                        <div style=" padding:15px; padding-bottom:47.5px">
                            <h3 style="font-size: 20px;color: #666;line-height: 18px; font-weight:normal; margin-bottom:6px">月访问数</h3>
                            <p style="color: #666; line-height:24px; font-size:12px">同上期增长</p>
                            <Progress :stroke-width="15" :percent="25"></Progress>
                        </div>
                        <div style="padding:15px;padding-bottom:47.5px">
                            <h3 style="font-size: 20px;color: #666;line-height: 18px;font-weight:normal;margin-bottom:6px">月访问数</h3>
                            <p style="color: #666; line-height:24px; font-size:12px">同上期增长</p>
                            <Progress :stroke-width="15" :percent="25"></Progress>
                        </div>
                        <div style=" padding:15px;padding-bottom:47.5px">
                            <h3 style="font-size: 20px;color: #666;line-height: 18px;font-weight:normal;margin-bottom:6px">月访问数</h3>
                            <p style="color: #666; line-height:24px; font-size:12px">同上期增长</p>
                            <Progress :stroke-width="15" :percent="25"></Progress>
                        </div>    
                    </div>
                    
                </Col>
            </Row>
            
        </div>
        <div class="chartstable">
            <Row :gutter="15">
                <Col span="8">
                    <Card :bordered="false">
                        <p slot="title">用户留言</p>
                        <div class="commentsbox" v-for="(item,i) in commentss" :key="i">
                            <h3>{{item.name}}</h3>
                            <p>{{item.comments}}</p>
                            <p class="actionline"><span class="time">5月11日 00:00</span><span class="repay">回复</span></p>
                        </div>
                    </Card>
                </Col>
                <Col span="16">
                    <Row :gutter="15">
                        <Col span="12">
                            <Card :bordered="false">
                                <p slot="title">本周活跃用户列表</p>
                                <div class="">
                                    <Table :columns="columns1" :data="data1"></Table>
                                </div>
                            </Card>
                        </Col>
                        <Col span="12">
                            <Card :bordered="false">
                                <p slot="title">项目进展</p>
                                <div>
                                    <Table @on-select="selectorder" @on-select-all="selectall" border ref="selection" :columns="columns4" :data="data4"></Table>
                                </div>
                            </Card>
                        </Col>
                    </Row>    
                    
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
import echarts from './echarts'
export default {
    data (){
        return {
            columns4: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                }
            ],
            commentss:[
                {
                    name:'贤心',
                    comments:'作为 layui 官方推出的后台模板，从初版的饱受争议，到后续的埋头丰富，逐步占据了国内后台系统应用的主要市场。'
                },
                {
                    name:'贤心',
                    comments:'作为 layui 官方推出的后台模板，从初版的饱受争议，到后续的埋头丰富，逐步占据了国内后台系统应用的主要市场。'
                },
                {
                    name:'贤心',
                    comments:'作为 layui 官方推出的后台模板，从初版的饱受争议，到后续的埋头丰富，逐步占据了国内后台系统应用的主要市场。'
                },{
                    name:'贤心',
                    comments:'作为 layui 官方推出的后台模板，从初版的饱受争议，到后续的埋头丰富，逐步占据了国内后台系统应用的主要市场。'
                },{
                    name:'贤心',
                    comments:'作为 layui 官方推出的后台模板，从初版的饱受争议，到后续的埋头丰富，逐步占据了国内后台系统应用的主要市场。'
                },{
                    name:'贤心',
                    comments:'作为 layui 官方推出的后台模板，从初版的饱受争议，到后续的埋头丰富，逐步占据了国内后台系统应用的主要市场。'
                }
                
            ],
            data4: [
                {
                    _checked:true,
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ],
            columns1: [
                {
                    title: '姓名',
                    key: 'name',
                    render: (h, params) => {
                        let stylecolor = '';
                        if(params.index===0){
                            stylecolor="#FF5722"   
                        } else if(params.index===1) {
                            stylecolor="#FFB800"
                        } else if(params.index===2) {
                            stylecolor="#5FB878"
                        }
                        return h('span',{
                            on: {
                                click: () => {
                                    this.showMessage(params)
                                },
                            },
                            style: {
                                cursor: 'pointer',
                                color: stylecolor,
                            },
                        },params.row.name);
                    }
                },
                {
                    title: '年龄',
                    key: 'age'
                },
                {
                    title: '地址',
                    key: 'address'
                }
            ],
            data1: [
                {
                    name: '王小明',
                    age: 18,
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗'
                },
                {
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道'
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道'
                },
                {
                    name: '我小李',
                    age: 26,
                    address: '深圳市南山区深南大道'
                }
            ],
            id:'pvnum',
            styles4:{
                height:'350px'
            },
            option: {

                tooltip: {
                    trigger: 'axis'
                },
                color:['#ff7319','#ff7319','#ff7319'],//修改legend的颜色
                legend: {
                    
                    data:['访问量','下载量','平均访问量']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },

                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一','周二','周三','周四','周五','周六','周日'],
                    splitLine:{//分割线
                        show:true,
                        lineStyle:{color:'#eeeeee'}
                    },
                    axisLine:{//轴的颜色
                        lineStyle:{color:'#009688'}
                    },
                    axisTick:false//轴的刻度线
                },
                yAxis: {
                    name:'访问量',//Y轴的顶部标签 名字
                    type: 'value',
                    splitLine:{//分割线
                        show:true,
                        lineStyle:{color:'#eeeeee'}
                    },
                    axisLine:{
                        lineStyle:{color:'#009688'},
                        
                    },
                    axisTick:false,
                    axisLabel:{
                        formatter:'{value}万'//轴的数据形式
                    }
                },
                series: [
                    {
                        name:'访问量',
                        type:'line',
                        smooth:true,
                        stack: '访问量',
                        lineStyle:{ //线条样式
                            color:"#ff7319"
                        },
                        //legendHoverLink:false,//鼠标滑过对应线条高亮
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'下载量',
                        type:'line',
                        smooth:true,
                        stack: '下载量',
                        lineStyle:{
                            color:"#ff7319"
                        },
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'平均访问量',
                        type:'line',
                        smooth:true,
                        stack: '平均访问量',
                        lineStyle:{
                            color:"#ff7319"
                        },
                        data:[150, 232, 201, 154, 190, 330, 410]
                    }
                ]
            }    
        }
    },
    methods:{
        showMessage(data){
            console.log(data.index)
        },
        selectorder(selection,row){
            console.log(selection,row)
        },
        selectall (selection){
            console.log(selection)
        }
    },
    components:{
        echarts    
    }
}
</script>
<style  scoped>
.headertable{ background:#f5f7f9}
.chartstable{ padding-top: 15px; background: #f5f7f9}
.datacontainer h3{ font-size: 36px; color: #666666; font-weight: normal }
.datacontainer p{ font-size: 14px; color: #666666 }
.commentsbox{ margin-bottom:30px }
.commentsbox h3{padding-bottom: 5px;font-weight: 700; color: #666666}
.commentsbox p{    padding-bottom: 10px;color: #666666; font-size: 14px}
.actionline{ overflow: hidden;}
.time{ color: #999999; float: left; font-size: 14px; line-height: 24px}
.repay{ display: block;
    height: 24px;
    line-height: 24px;
    padding: 0 5px;
    background-color: #009688;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    font-size: 14px;
    border: none;
    border-radius: 2px;
    cursor: pointer; float: right;}
</style>

