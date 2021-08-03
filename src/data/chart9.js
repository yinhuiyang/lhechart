import * as echarts from "echarts";
let chart9 = function (chartDom) {
    var myChart9 = echarts.init(chartDom);
    var option = null;
    var datas = [20, 50, 80, 70, 10];

    option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b} : {c}%'
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
            data: ["一个月以下", "1~3个月", '3~6个月', '6~12个月', '一年以上'],
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色
                },
                fontSize: 8
            }
        },
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
        series: [{
            barWidth: 15,
            itemStyle: {
                normal: {
                    //好，这里就是重头戏了，定义一个list，然后根据索引取得不同的值，这样就实现了，
                    color: function (params) {
                        // build a color map as your need.
                        var colorList = [
                            '#de4354', '#08bf76', '#e68e3b', '#0682d8', '#05bfc4'
                        ];
                        return colorList[params.dataIndex]
                    },
                    //以下为是否显示，显示位置和显示格式的设置了

                }
            },

            data: datas,
            type: 'bar'
        }]
    };

    if (option && typeof option === "object") {
        myChart9.setOption(option);
    }
};
export default chart9;
