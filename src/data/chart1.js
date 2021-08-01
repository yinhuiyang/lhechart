import * as echarts from "echarts";
let chart1 = function (chartDom) {
    var myChart = echarts.init(chartDom);
    var option = null;
    var datas = [
        ////////////////////////////////////////
        [
            { name: "空置", value: 3.7 },
            { name: "已用", value: 6.3 }

        ],
    ];

    option = {
        title: {
            left: "center",
            textStyle: {
                color: "#999",
                fontWeight: "normal",
                fontSize: 14,
            },
        },
        calculable: true,
        legend: {
            bottom: 0,
            left: 'center',
            color: "#fff",
            data: ['已用', '空置']
        },
        series: datas.map(function (data) {
            // var top = idx * 33.3;
            return {
                type: "pie",
                startAngle: 0, //起始角度
                radius: [20, 60],
                top: "30%",
                height: "33.33%",
                left: "center",
                width: '70%',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            let colors = [
                                '#268589', '#1bb45c'
                            ];
                            return colors[params.dataIndex]
                        }
                    }

                },
                label: {
                    // normal: {
                    //     show: true,
                    //     position: 'inside',
                    //     formatter: '{d}%'
                    // },
                    alignTo: "edge",
                    minMargin: 5,
                    edgeDistance: 10,
                    color: "#1bb45c",
                    lineHeight: 15,
                    rich: {
                        time: {
                            fontSize: 10,
                            color: "#1bb45c",
                        },
                    },
                },
                labelLine: {
                    length: 15,
                    length2: 0,
                    maxSurfaceAngle: 80,
                },
                data: data,
            };
        }),
    };
    if (option && typeof option === "object") {
        myChart.setOption(option);
    }
};
export default chart1