<template>
	<div style="background: #E6E6E6;">
		<div class="topCards">
			<Card :bordered="false">
	            <p slot="title">今日访问量</p>
	            <echarts :ids="id1" :styles="styles1" :options="options1"></echarts>
	        </Card>
		</div>
		<div class="twoCards">
			<div class="commonCards leftCards">
				<Card :bordered="false">
		            <p slot="title">南丁格尔玫瑰图</p>
		            <echarts :ids="id2" :styles="styles2" :options="options2"></echarts>
		        </Card>
			</div>
			
			<div class="commonCards rightCards">
				<Card :bordered="false">
		            <p slot="title">柱形图</p>
		            <echarts :ids="id3" :styles="styles3" :options="options3"></echarts>
		        </Card>
			</div>
		</div>
	</div>
</template>
<script>
	import echarts from '@/components/echarts/echarts'
    export default {
        data () {
            return {
            	id1:"comeover",
            	id2:"pie",
            	id3:"map",
            	styles1:{
            		"width":"100%",
            		"height":'400px'
            	},
            	styles2:{
            		"width":"100%",
            		"height":'400px'
            	},
            	styles3:{
            		"width":"100%",
            		"height":'400px'
            	},
            	options1: {
            		//backgroundColor: '#394056',
            		tooltip: {
			          trigger: 'axis',
			          axisPointer: {
			            lineStyle: {
			              color: '#57617B'
			            }
			          }
			        },
			        grid: {
			          top: 100,
			          left: '3%',
			          right: '4%',
			          bottom: '2%',
			          containLabel: true
			        },
            		//标识
            		legend: {
			          top: 20,
			          icon: 'rect',
			          itemWidth: 14,
			          itemHeight: 5,
			          itemGap: 13,
			          data: ['CMCC', 'CTCC'],
			          right: '4%',
			          textStyle: {
			            fontSize: 12,
			            color: '#333333'
			          }
			        },
				    xAxis: {
				        type: 'category',
				        boundaryGap: false,
				        axisLine: {
				            lineStyle: {
				              color: '#57617B'
				            }
				        },
				        data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
				    },
				    yAxis: [{
				        type: 'value',
				        name: '(%)',
				        axisTick: {
				            show: false
				        },
				        axisLine: {
				            lineStyle: {
				              color: '#57617B'
				            }
				        },
				        axisLabel: {
				            margin: 10,
				            textStyle: {
				              fontSize: 14
				            }
				        },
				        splitLine: {
				            lineStyle: {
				              color: '#57617B'
				            }
				        }
				    }],
				    series: [
				    {
				    	
				    	name: 'CMCC',
				        type: 'line',
				        smooth: true,
				        symbol: 'rect',
				        symbolSize: 5,
				        showSymbol: false,
				        lineStyle: {
				            normal: {
				              width: 1
				            }
				        },
				        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
//				        areaStyle: {
//				            normal: {
//				              	color: '#f'
//				            }
//			          	},
			          	itemStyle: {
				            normal: {
				              	color: 'rgb(137,189,27)',
				              	borderColor: 'rgba(137,189,2,0.27)',
				              	borderWidth: 12
				            }
			          	}
				    },{
				    	name: 'CTCC',
				        type: 'line',
				        smooth: true,
				        symbol: 'circle',
				        symbolSize: 5,
				        showSymbol: false,
				        lineStyle: {
				            normal: {
				              width: 1
				            }
				        },
				        itemStyle: {
				            normal: {
				              color: 'rgb(0,136,212)',
				              borderColor: 'rgba(0,136,212,0.2)',
				              borderWidth: 12
				            }
				        },
				        data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
				    }]
				},
				options2:{
				    title : {
				        text: '南丁格尔玫瑰图',
				        subtext: '纯属虚构',
				        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        x : 'center',
				        y : 'bottom',
				        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
				    },
				    //下载按钮之类的
//				    toolbox: {
//				        show : true,
//				        feature : {
//				            mark : {show: true},
//				            dataView : {show: true, readOnly: false},
//				            magicType : {
//				                show: true,
//				                type: ['pie', 'funnel']
//				            },
//				            restore : {show: true},
//				            saveAsImage : {show: true}
//				        }
//				    },
				    calculable : true,
				    series : [
				        
				        {
				            name:'面积模式',
				            type:'pie',
				            radius : [30, 110],
				            center : ['50%', '50%'],
				            roseType : 'area',
				            data:[
				                {value:10, name:'rose1'},
				                {value:5, name:'rose2'},
				                {value:15, name:'rose3'},
				                {value:25, name:'rose4'},
				                {value:20, name:'rose5'},
				                {value:35, name:'rose6'},
				                {value:30, name:'rose7'},
				                {value:40, name:'rose8'}
				            ]
				        }
				    ]
				},
				options3: {
				    tooltip : {
				        trigger: 'axis',
				        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    legend: {
				        data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis:  {
				        type: 'category',
				        data: ['周一','周二','周三','周四','周五','周六','周日']
				    },
				    yAxis: {
				        type: 'value',
				        
				    },
				    
				    series: [
					    
				        {
				        	itemStyle:{
						    	color:"#ff7319"
						    },
				            name: '直接访问',
				            type: 'bar',
				            stack: '总量',
				            label: {
				                normal: {
				                    show: true,
				                    position: 'insideRight'
				                }
				            },
				            data: [320, 302, 301, 334, 390, 330, 320]
				        },
				        {
				        	itemStyle:{
						    	color:"#4aa6fc"
						    },
				            name: '邮件营销',
				            type: 'bar',
				            stack: '总量',
				            label: {
				                normal: {
				                    show: true,
				                    position: 'insideRight'
				                }
				            },
				            data: [120, 132, 101, 134, 90, 230, 210]
				        },
				        {
				        	itemStyle:{
						    	color:"#ff7319"
						    },
				            name: '联盟广告',
				            type: 'bar',
				            stack: '总量',
				            label: {
				                normal: {
				                    show: true,
				                    position: 'insideRight'
				                }
				            },
				            data: [220, 182, 191, 234, 290, 330, 310]
				        },
				        {
				        	itemStyle:{
						    	color:"#4aa6fc"
						    },
				            name: '视频广告',
				            type: 'bar',
				            stack: '总量',
				            label: {
				                normal: {
				                    show: true,
				                    position: 'insideRight'
				                }
				            },
				            data: [150, 212, 201, 154, 190, 330, 410]
				        },
				        {
				        	itemStyle:{
						    	color:"#ff7319"
						    },
				            name: '搜索引擎',
				            type: 'bar',
				            stack: '总量',
				            label: {
				                normal: {
				                    show: true,
				                    position: 'insideRight'
				                }
				            },
				            data: [820, 832, 901, 934, 1290, 1330, 1320]
				        }
				    ]
				}
            }
        },
        components:{echarts}
    }
</script>

<style>
	.topCards{ padding: 40px;}
	.twoCards{ overflow: hidden;}
	.commonCards{ width: 50%; box-sizing: border-box; padding: 0 40px;}
	.rightCards{ float: right;}
	.leftCards{ float: left;}
</style>