<template>
	<div>
		<echarts :options="options" :ids="id" :styles="styles"></echarts>
		<Row style="background:#eee;padding:20px">
	        <Col span="11">
	            <Card :bordered="false">
	                <p slot="title">今日待办事项</p>
	                <echarts :options="options1" :ids="id1" :styles="styles1"></echarts>
	            </Card>
	        </Col>
	        <Col span="11" offset="2">
	            <Card shadow>
	                <p slot="title">明天安排事项</p>
	               	<echarts :options="options2" :ids="id2" :styles="styles2"></echarts>
	            </Card>
	        </Col>
	    </Row>
	</div>
</template>

<script>
	import echarts from './echarts'
	
	export default {
		data(){
			return {
				id:"main",
				id1:"chart",
				id2:"chart1",
				options:{
					title: {
				        text: '折线图堆叠'
				    },
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    toolbox: {
				        feature: {
				            saveAsImage: {}
				        }
				    },
				    xAxis: {
				        type: 'category',
				        boundaryGap: false,
				        data: ['周一','周二','周三','周四','周五','周六','周日']
				    },
				    yAxis: {
				        type: 'value'
				    },
				    series: [
				        {
				            name:'邮件营销',
				            type:'line',
				            stack: '总量',
				            data:[120, 132, 101, 134, 90, 230, 210]
				        },
				        {
				            name:'联盟广告',
				            type:'line',
				            stack: '总量',
				            data:[220, 182, 191, 234, 290, 330, 310]
				        },
				        {
				            name:'视频广告',
				            type:'line',
				            stack: '总量',
				            data:[150, 232, 201, 154, 190, 330, 410]
				        },
				        {
				            name:'直接访问',
				            type:'line',
				            stack: '总量',
				            data:[320, 332, 301, 334, 390, 330, 320]
				        },
				        {
				            name:'搜索引擎',
				            type:'line',
				            stack: '总量',
				            data:[820, 932, 901, 934, 1290, 1330, 1320]
				        }
				    ]
				},
				options1:{
				 	tooltip: {
				        trigger: 'item',
				        formatter: "{a} <br/>{b}: {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        x: 'left',
				        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
				    },
				    series: [
				        {
				            name:'访问来源',
				            type:'pie',
				            radius: ['50%', '70%'],
				            avoidLabelOverlap: false,
				            label: {
				                normal: {
				                    show: false,
				                    position: 'center'
				                },
				                emphasis: {
				                    show: true,
				                    textStyle: {
				                        fontSize: '30',
				                        fontWeight: 'bold'
				                    }
				                }
				            },
				            labelLine: {
				                normal: {
				                    show: false
				                }
				            },
				            data:[
				                {value:335, name:'直接访问'},
				                {value:310, name:'邮件营销'},
				                {value:234, name:'联盟广告'},
				                {value:135, name:'视频广告'},
				                {value:1548, name:'搜索引擎'}
				            ]
				        }
				    ]
				},
				options2:{
				 	tooltip: {
				        trigger: 'item',
				        formatter: "{a} <br/>{b}: {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        x: 'left',
				        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
				    },
				    series: [
				        {
				            name:'访问来源',
				            type:'pie',
				            radius: ['50%', '70%'],
				            avoidLabelOverlap: false,
				            label: {
				                normal: {
				                    show: false,
				                    position: 'center'
				                },
				                emphasis: {
				                    show: true,
				                    textStyle: {
				                        fontSize: '30',
				                        fontWeight: 'bold'
				                    }
				                }
				            },
				            labelLine: {
				                normal: {
				                    show: false
				                }
				            },
				            data:[
				                {value:335, name:'直接访问'},
				                {value:310, name:'邮件营销'},
				                {value:234, name:'联盟广告'},
				                {value:135, name:'视频广告'},
				                {value:1548, name:'搜索引擎'}
				            ]
				        }
				    ]
				},
				styles:{
					'height':'400px',
					'width':'100%'
				},
				styles1:{
					'height':'400px',
					'width':'400px'
				},
				styles2:{
					'height':'400px',
					'width':'400px'
				}
			}
		},
		components:{
			echarts
		},
		methods:{
			
		}
	}
</script>

<style>
</style>