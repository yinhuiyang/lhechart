import * as echarts from "echarts";
let chart7 = function (chartDom) {
  var myChart = echarts.init(chartDom);
  var option = null;
  var datas = [
    [
      { name: "楼房", value: 2.0 },
      { name: "平房", value: 3.5 },
      { name: "别墅", value: 4.5 },
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
      // bottom: 0,
      top: "85%",
      left: "center",
      textStyle: {
        color: "#fff",
      },
      selected: {
        有电梯: true,
      },
      data: ["楼房", "平房", "别墅"],
    },
    series: datas.map(function (data) {
      return {
        type: "pie",
        startAngle: 200, //起始角度
        radius: [35, 80],
        top: "30%",
        height: "33.33%",
        left: "center",
        width: "90%",
        itemStyle: {
          normal: {
            borderWidth: 5,
            borderColor: "#000433",
            color: function (params) {
              let colors = ["#1573d9", "#ff2a53", "#f79f53"];
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
export default chart7;
