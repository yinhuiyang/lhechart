import * as echarts from "echarts";
let chart10 = function (chartDom) {
    var myChart = echarts.init(chartDom);
    var option = null;
    var datas = [
        [
            { name: "自用", value: 2.0 },
            { name: "出租", value: 3.0 },
            { name: "闲置", value: 5.0 },
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
            orient: "vertical",
            left: "10%",
            y: "center",
            textStyle: {
                color: "#fff",
            },
            data: ["自用", "出租", "闲置"],
        },
        series: datas.map(function (data) {
            return {
                type: "pie",
                startAngle: 180, //起始角度
                radius: [15, 70],
                center: ["75%", "50%"],
                top: "30%",
                height: "33.33%",
                left: "center",
                width: "70%",
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        borderColor: "#000433",
                        color: function (params) {
                            let colors = ["#f79f4d", "#4435ff", "#05b6bb"];
                            return colors[params.dataIndex];
                        },
                    },
                },
                label: {
                    show: true,
                    position: "inner",
                    formatter: "{d} %",
                    alignTo: "edge",
                    minMargin: 5,
                    edgeDistance: 10,
                    color: "#fff",
                    lineHeight: 15,
                    rich: {
                        time: {
                            fontSize: 10,
                            colors: ["#268589", "#1bb45c"],
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
export default chart10;
