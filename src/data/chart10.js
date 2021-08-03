import * as echarts from "echarts";
let chart10 = function (chartDom) {
    var myChart = echarts.init(chartDom);
    var option = null;
    var datas = [14, 34, 56, 56, 32, 67, 89, 44, 23, 63, 76, 23];
    option = {
        //x轴
        tooltip: {
            trigger: 'axis',
            formatter: '空置率 : <br/>{c}%'
        },
        grid: {
            left: '6%',
            right: '15%',
            top: "30%",
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            name: '月份',
            splitLine: {
                show: true, lineStyle: {
                    color: ['#2a2e70'],
                    width: 1
                }
            },
            data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            axisLine: {
                lineStyle: {
                    // 设置x轴颜色
                    color: '#fff',
                }
            },
        },
        //y轴
        yAxis: {
            name: '空置率',
            type: 'value',
            min: 0, // 设置y轴刻度的最小值
            splitLine: { show: false },//去除网格线
            max: 100,  // 设置y轴刻度的最大值
            splitNumber: 5,  // 设置y轴刻度间隔个数
            boundaryGap: false,
            color: '#fff',
            axisLabel: {
                formatter: '{value} %'
            },
            axisLine: {
                onZero: true,
                lineStyle: {
                    // 设置y轴颜色
                    width: 0,
                    color: '#fff'
                }
            }


        },
        //数据-data是最终要显示的数据
        series: [{
            type: 'line',
            // 设置折线上圆点大小
            symbolSize: 6,
            // 设置拐点为实心圆
            symbol: 'circle',
            color: '#3ed4fb',
            lineStyle: {
                width: 2,
                shadowColor: 'rgba(0,4,85,.5)',
                shadowBlur: 3,
                shadowOffsetY: 20
            },
            data: datas
        }]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option);
    }
};
export default chart10;
