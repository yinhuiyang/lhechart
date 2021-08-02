import * as echarts from "echarts";
let chart6 = function (chartDom) {
  var myChart = echarts.init(chartDom);
  var option = null;
  var datas = [
    [
      { name: "莲塘街道", value: 3.0 },
      { name: "有电梯", value: 7.0 },
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
      formatter: function () {
        let str = "莲塘街道";
        return str;
      },
    },
    series: datas.map(function (data) {
      return {
        type: "pie",
        startAngle: 180, //起始角度
        radius: [30, 80],
        top: "30%",
        height: "33.33%",
        left: "center",
        width: "70%",
        itemStyle: {
          normal: {
            borderWidth: 5,
            borderColor: "#000433",
            color: function (params) {
              let colors = ["#ff2a2a", "#020d6e"];
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
export default chart6;
