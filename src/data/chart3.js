import * as echarts from "echarts";
let chart3 = function (chartDom) {
  var myChart = echarts.init(chartDom);
  var option = null;
  var datas = [
    [
      { name: "无电梯", value: 2.0 },
      { name: "有电梯", value: 8.0 },
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
      data: ["无电梯", "有电梯"],
    },
    series: datas.map(function (data) {
      return {
        type: "pie",
        startAngle: 180, //起始角度
        radius: [20, 60],
        top: "30%",
        height: "33.33%",
        left: "center",
        width: "70%",
        itemStyle: {
          normal: {
            borderWidth: 5,
            borderColor: "#000433",
            color: function (params) {
              let colors = ["#35f7ff", "#354dff"];
              return colors[params.dataIndex];
            },
          },
        },
        label: {
          formatter: "{d} %",
          alignTo: "edge",
          minMargin: 5,
          edgeDistance: 5,
          color: "#1bb45c",
          lineHeight: 15,
          textStyle: {
            color: "auto",
          },
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
export default chart3;
