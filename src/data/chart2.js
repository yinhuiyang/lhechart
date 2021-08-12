import * as echarts from "echarts";
let chart2 = function (chartDom, areaData) {
  // let xdatas = []
  let ydatas = [];
  for (let item in areaData) {
    ydatas.push(areaData[item]);
    // xdatas.push(item)
  }
  var myChart2 = echarts.init(chartDom);
  var option = null;
  option = {
    grid: {
      left: "6%",
      right: "20%",
      top: "30%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      name: "住房类型",
      type: "category",
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#2a2e70"],
          width: 1,
        },
      },
      data: ["城中村", "商品房", "商业", "办公", "厂房", "其他"],
      // data: xdatas,
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      axisLabel: {
        textStyle: {
          color: "#fff", //坐标值得具体的颜色
        },
        fontSize: 8,
      },
    },
    yAxis: {
      name: "空置率",
      boundaryGap: [0, 0.01],
      min: 0, // 设置y轴刻度的最小值
      max: 100, // 设置y轴刻度的最大值
      axisTick: { show: false },
      axisLabel: {
        formatter: "{value} %",
      },
      axisLine: {
        onZero: true,
        lineStyle: {
          // 设置y轴颜色
          width: 0,
          color: "#fff",
        },
      },
      splitLine: { show: false }, //去除网格线
    },
    series: [
      {
        name: "",
        type: "bar",
        barWidth: 20,
        barGap: "0%",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              formatter: "{c}%",
              textStyle: {
                color: "auto",
              },
            },
            color: function (params) {
              var colorList = [
                "#de4354",
                "#08bf76",
                "#e68e3b",
                "#0682d8",
                "#05bfc4",
                "#783edd",
              ];
              return colorList[params.dataIndex];
            },
          },
        },
        data: ydatas,
      },
      //柱顶圆片
      {
        name: "",
        type: "pictorialBar",
        symbolSize: [20, 10],
        symbolOffset: [0, -5],
        z: 12,
        symbolPosition: "end",
        itemStyle: {
          normal: {
            color: function (params) {
              var colorList = [
                "#ffa9b3",
                "#b0ffdf",
                "#ffe0c3",
                "#8fd1ff",
                "#9dfcff",
                "#d0b5ff",
              ];
              return colorList[params.dataIndex];
            },
          },
        },
        data: ydatas,
      },
    ],
  };

  if (option && typeof option === "object") {
    myChart2.setOption(option);
  }
};
export default chart2;
