<template>
	<div style="background:#f5f7f9;">
		<Row>
			<Col span="18">
				<div style="overflow:hidden">
					<Col span="12" style="padding:5px">
						<Card :bordered="false" style="height:230px; background:#ffffff;">
							<p slot="title">快捷方式</p>
							<div class="card-body">
								<Row>
									<Col span="6" class="icon-item" v-for="(item,index) in actionshref">
										<div class="icon-text">
											<Icon :type="item.icon" size="32" />
											<p>{{item.actionname}}</p>
										</div>
									</Col>
									<!-- <Col span="6" class="icon-item">
										<div class="icon-text">
											<Icon type="ios-basketball" size="32" />
											<p>主页一</p>
										</div>
									</Col>
									<Col span="6" class="icon-item">
										<div class="icon-text">
											<Icon type="ios-basketball" size="32" />
											<p>主页一</p>
										</div>
									</Col>
									<Col span="6" class="icon-item">
										<div class="icon-text">
											<Icon type="ios-basketball" size="32" />
											<p>主页一</p>
										</div>
									</Col>
									<Col span="6" class="icon-item">
										<div class="icon-text">
											<Icon type="ios-basketball" size="32" />
											<p>主页一</p>
										</div>
									</Col>
									<Col span="6" class="icon-item">
										<div class="icon-text">
											<Icon type="ios-basketball" size="32" />
											<p>主页一</p>
										</div>
									</Col>
									<Col span="6" class="icon-item">
										<div class="icon-text">
											<Icon type="ios-basketball" size="32" />
											<p>主页一</p>
										</div>
									</Col>
									<Col span="6" class="icon-item">
										<div class="icon-text">
											<Icon type="ios-basketball" size="32" />
											<p>主页一</p>
										</div>
									</Col> -->
								</Row>
							</div>
						</Card>
					</Col>
					<Col span="12" style="padding:5px">
						<Card :bordered="false" style="height:230px; background:#ffffff;">
							<p slot="title">待办事项</p>
							<div class="card-body">
								<Row>
									<Col span="12" class="icon-item">
										<div class="icon-text wait-for">
											<p class="wait-title">待审评论</p>
											<p class="wait-num">64</p>
										</div>
									</Col>
									<Col span="12" class="icon-item wait-for">
										<div class="icon-text">
											<p class="wait-title">待审评论</p>
											<p class="wait-num">64</p>
										</div>
									</Col>
									<Col span="12" class="icon-item wait-for">
										<div class="icon-text">
											<p class="wait-title">待审评论</p>
											<p class="wait-num">64</p>
										</div>
									</Col>
									<Col span="12" class="icon-item wait-for">
										<div class="icon-text">
											<p class="wait-title">待审评论</p>
											<p class="wait-num">64</p>
										</div>
									</Col>
								</Row>
							</div>
						</Card>
					</Col>	
				</div>
				<div class="datashow" style="padding: 5px; position:relative">
					<div class="topdian" >
						<span :class="index===0?'active':''" @mouseenter="onEnter(0)" @mouseleave="onLeave(0)">
						</span>
						<span :class="index===1?'active':''" @mouseenter="onEnter(1)" @mouseleave="onLeave(1)">
						</span>
						<span :class="index===2?'active':''" @mouseenter="onEnter(2)" @mouseleave="onLeave(2)">
						</span >
					</div>
					<Card :bordered="false"  >
						<p slot="title">数据浏览</p>
						<div class="datasvg" v-show="index===0">
							<echarts :ids="id4" :styles="styles4" :options="options4"></echarts>
						</div>
						<div class="datasvg"  v-show="index===1">
							<echarts :ids="id2" :styles="styles2" :options="options3"></echarts>
						</div>
						<div class="datasvg"  v-show="index===2">
							<echarts :ids="id3" :styles="styles3" :options="options2"></echarts>
						</div>
					</Card>	
				</div>
				<div style="padding: 5px;">
					<Card :bordered="false">
						<p slot="title">今日充值情况</p>
						<div>
							<Table border :columns="columns5" :data="data5" size="small"></Table>
						</div>
					</Card>
				</div>
			</Col>
			<Col span="6" style="padding:5px">
				<div>
					<Card :bordered="false" style="height:230px; background:#ffffff;">
						<p slot="title">版本信息</p>
						<div style="height:146px" class="tableinfo">
							<table border="1" width="100%" borderColor="#e6e6e6" cellspacing=5 cellpadding=5 rules="all">
								<tr>
									<td style="width:40%">当前版本</td>
									<td>v1.2.1 pro </td>
								</tr>
								<tr>
									<td>基于框架</td>
									<td>iview </td>
								</tr>
								<tr>
									<td>主要特色</td>
									<td>页面 UI 组件</td>
								</tr>
								<tr>
									<td>合伙人</td>
									<td>
										<Button type="warning">联系我们</Button>
										<Button type="error">加入我们</Button>
									</td>
								</tr>
							</table>
						</div>
					</Card>	
				</div>
				<div style="margin-top:10px">
					<Card :bordered="false">
						<p slot="title">效果报告</p>
						<div style="margin-bottom:20px">
							<div class="collecttion">
								<span class="rate">65%</span>
								<span class="rateintro">转化率(日同比 28%)</span>
							</div>
							<Progress :percent="65" :stroke-width="6" hide-info />
						</div>
						<div>
							<div class="collecttion">
								<span class="rate">65%</span>
								<span class="rateintro">签到率(日同比 28%)</span>
							</div>
							<Progress :percent="65" status="success" :stroke-width="6" hide-info />
						</div>
					</Card>	
				</div>
				<div style="margin-top:10px">
					<Card :bordered="false">
						<p slot="title">实时监控</p>
						<div style="margin-bottom:20px">
							<div class="collecttion">
								<span class="rate">65%</span>
								<span class="rateintro">转化率(日同比 28%)</span>
							</div>
							<Progress :percent="65" :stroke-width="6" hide-info />
						</div>
						<div>
							<div class="collecttion">
								<span class="rate">65%</span>
								<span class="rateintro">签到率(日同比 28%)</span>
							</div>
							<Progress :percent="65" status="success" :stroke-width="6" hide-info />
						</div>
					</Card>	
				</div>
				<div style="margin-top:10px">
					<Card :bordered="false">
						<p slot="title">温馨提示</p>
						<div class='warmtip'>
							<p>今日降温，请注意保暖，谨防感冒</p>
							<p>今日降温，请注意保暖，谨防感冒</p>
							<p>今日降温，请注意保暖，谨防感冒</p>
							<p>今日降温，请注意保暖，谨防感冒</p>
							<p>今日降温，请注意保暖，谨防感冒</p>
							<p>今日降温，请注意保暖，谨防感冒</p>
							<p>今日降温，请注意保暖，谨防感冒</p>
							<p>今日降温，请注意保暖，谨防感冒</p>
						</div>
					</Card>
				</div>
			</Col>
		</Row>
	</div>
</template>
<script>
	import echarts from '@/components/echarts/echarts'
    export default {
        data () {
            return {
				index:0,
				show1:true,
				show2:false,
				show3:false,
            	id1:"comeover",
            	id2:"pie",
				id3:"map",
				id4:"nuns",
            	styles1:{
            		"width":"100%",
            		"height":'168px'
            	},
            	styles2:{
            		"width":"100%",
            		"height":'400px'
            	},
            	styles3:{
            		"width":"100%",
            		"height":'400px'
				},
				styles4:{
            		"width":"100%",
            		"height":'400px'
				},
				actionshref:[
					{
						actionname:'主页一',
						icon:'ios-basketball'
					},
					{
						actionname:'主页一',
						icon:'ios-basketball'
					},
					{
						actionname:'主页一',
						icon:'ios-basketball'
					},
					{
						actionname:'主页一',
						icon:'ios-basketball'
					},
					{
						actionname:'主页一',
						icon:'ios-basketball'
					},
					{
						actionname:'主页一',
						icon:'ios-basketball'
					},
					{
						actionname:'主页一',
						icon:'ios-basketball'
					},
					{
						actionname:'主页一',
						icon:'ios-basketball'
					},		
				],
				options2 : {
					title : {
						text: '最近一周新增会员',
						x:'center'
					},
					tooltip : {
						trigger: 'axis',
					},
					grid:{
						containLabel: true
					},
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
						axisLine:{
							lineStyle:{color:'#009688'}//刻度颜色
						},
						splitLine:{//分割线
							show:true,
							lineStyle:{color:'#eeeeee'}
						},
						axisTick:false //是否显示刻度
					},
					yAxis: {
						type: 'value',
						axisLine:{
							lineStyle:{color:'#009688'}
						},
						splitLine:{
							show:true,
							lineStyle:{color:'#eeeeee'}
						},
						axisTick:false //是否显示刻度
					},
					series: [{
						data: [820, 932, 901, 934, 1290, 1330, 1320],
						type: 'line',
						smooth:true,
						itemStyle:{
							color:'#009688'
						}
					}]
				},
				options3:{
					//color:['#ff7319'],
					title : {
						text: '访问来源',
						x:'center'
					},
					tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						left: 'left',
						top:'30%',
						data: ['Chrome','Firefox','IE 8.0','Safri','其他浏览器']
					},
					series : [
						{
							name: '访问来源',
							type: 'pie',
							radius : '55%',
							center: ['50%', '60%'],
							data:[
								{
									value:335, 
									name:'Chrome',
									itemStyle:{
										color:'#ff7319'
									}
								},
								{value:310, name:'Firefox'},
								{value:234, name:'IE 8.0'},
								{value:135, name:'Safri'},
								{value:1548, name:'其他浏览器'}
							],
							itemStyle: {
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							}
						}
					]
				},
				options4: {
					title: {
						text: '新会员注册情况'
					},
					tooltip : {
						trigger: 'axis',
						// axisPointer: {//坐标指示器
						// 	type: 'cross',
						// 	label: {
						// 		backgroundColor: '#6a7985'
						// 	}
						// }
					},

					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					calculable : true,
					xAxis : [
						{
							type : 'category',
							boundaryGap : false,
							data : ['2018-01-02','2018-01-03','2018-01-04','2018-01-05','2018-01-06','2018-01-07']
						}
					],
					yAxis : [
						{
							type : 'value'
						}
					],
					series : [
						{
							name:'pv',
							type:'line',
							stack: 'pv量',//堆叠方式名字不一样交叉 名字一样堆叠
							smooth:true,
							itemStyle: {
								normal: {
									color: '#289df5', // 折线条的颜色
									borderColor: '#289df5', // 拐点边框颜色
									areaStyle: {//折线背景面积颜色
										type: 'default',
										opacity: 0.1
									}
								}
							},
							data: [310, 212, 221, 154, 260, 430,  60]
						},
						{
							name:'uv',
							type:'line',
							stack: 'uv量',
							itemStyle: {
								normal: {
									color: '#fbc01b',
									borderColor: '#fbc01b',
									areaStyle: {
										type: 'default',
										opacity: 0.1
									}
								}
							},
							smooth:true,//平滑曲线
							data: [151, 282, 151, 120, 120, 80, 130]
						}
					]
				},
				columns5: [
                    {
                        title: 'ID',
						key: 'id',
						width: 60,
                        align: 'center'
                    },
                    {
                        title: '用户名',
                        key: 'name'
                    },
                    {
                        title: '充值金额',
                        key: 'money',
						sortable: true,
						render: (h, params) => {
                            return h('div',{
								style: {
									color: '#ff7319'
								}
							},params.row.money);
                        }
                    },{
                        title: '充值时间',
                        key: 'date'
                    }
                ],
                data5: [
                    {
						id:'1',
                        name: '13663071703',
						money:'200,000.00',
						date:'2012-01-01 06:30'
                    },
                    {
						id:'2',
                        name:'13663071703',
						money:'200,000.00',
						date:'2012-01-01 06:30'
					},
					 {
						id:'3',
                        name: '13663071703',
						money:'200,000.00',
						date:'2012-01-01 06:30'
					},
					 {
						id:'4',
                        name: '13663071703',
						money:'200,000.00',
						date:'2012-01-01 06:30'
					},
					{
						id:'4',
                        name: '13663071703',
						money:'200,000.00',
						date:'2012-01-01 06:30'
					},
					{
						id:'5',
                        name: '13663071703',
						money:'200,000.00',
						date:'2012-01-01 06:30'
					},
					{
						id:'6',
                        name: '13663071703',
						money:'200,000.00',
						date:'2012-01-01 06:30'
					},
					{
						id:'7',
                        name: '13663071703',
						money:'200,000.00',
						date:'2012-01-01 06:30'
					},
					{
						id:'8',
                        name: '13663071703',
						money:'200,000.00',
						date:'2012-01-01 06:30'
					},
					{
						id:'9',
                        name: '13663071703',
						money:'200,000.00',
						date:'2012-01-01 06:30'
					},
					{
						id:'10',
                        name: '13663071703',
						money:'200,000.00',
						date:'2012-01-01 06:30'
                    },
                ]
            }
        },
		components:{echarts},
		methods:{
			onEnter(index){
				this.index=index
				var event = document.createEvent("HTMLEvents");
                event.initEvent("resize", true, true);
                window.dispatchEvent(event);
				console.log(index)
			},
			onLeave(index){
				this.index!=index
			}
		}
    }
</script>

<style scoped>
.collecttion{ overflow: hidden;}
.collecttion .rate{ line-height: 26px;font-size: 26px; color: #666666; float: left; }
.collecttion .rateintro{ font-size: 14px; color: #999999; float: right;}
.warmtip{ color: #666666; font-size: 14px; text-indent: 28px}
.tableinfo td{ padding:5px }
.topdian{ position: absolute; top: 24px; right: 30px;z-index: 6666;}
.topdian span{ display: inline-block; width:10px; height:10px;border-radius: 50%;cursor: pointer;    background-color: #e2e2e2;}
.topdian span.active{  background-color: #999999;}
.icon-item{ padding: 5px; text-align: center;}
.icon-text{ background: #f5f7f9; padding: 5px 0}
.wait-for{ text-align: left; text-indent: 10px}
.wait-title{padding-bottom: 5px;
    font-size: 12px;}
.headr-left{
	width:30%;float:left;
	box-sizing:border-box;
	-webkit-box-sizing:border-box;
	padding-right: 10px
}
.wait-num{
	font-size: 30px;
    font-weight: 300;
    color: #009688;
	line-height: 30px
}
.headr-right{
	width:70%;float:left;
	box-sizing:border-box;
	-webkit-box-sizing:border-box;
	padding-left: 10px
}
.ivu-layout-content{ background: #f5f7f9}
	.title{ color: #666666; font-size: 14px}
	.numbers{ color:#333333; font-size: 32px; line-height: 60px}
	.topCards{ padding: 40px;}
	.twoCards{ overflow: hidden;}
	.commonCards{ width: 50%; box-sizing: border-box; padding: 0 40px;}
	.rightCards{ float: right;}
	.leftCards{ float: left;}
</style>