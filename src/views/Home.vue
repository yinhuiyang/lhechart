<template>
  <div class="home">
    <div class="header">
      <img src="../assets/bg.png" alt="" />
    </div>
    <div class="title">
      <img src="../assets/location.png" alt="" />
      <span>深圳市罗湖区莲塘街道</span>
    </div>
    <div class="content">
      <div class="leftContent">
        <div class="chart1">
          <div class="chartTitle">街道空置率</div>
          <div class="t_line_box">
            <i class="t_l_line"></i>
            <i class="l_t_line"></i>
          </div>
          <div class="t_line_box">
            <i class="t_r_line"></i>
            <i class="r_t_line"></i>
          </div>
          <div class="t_line_box">
            <i class="b_l_line"></i>
            <i class="l_b_line"></i>
          </div>
          <div class="t_line_box">
            <i class="b_r_line"></i>
            <i class="r_b_line"></i>
          </div>
          <div id="chart1"></div>
        </div>
        <div class="chart2 mt20"></div>
        <div class="chart3 mt20">
          <div class="chartTitle">电梯</div>
          <div class="t_line_box">
            <i class="t_l_line"></i>
            <i class="l_t_line"></i>
          </div>
          <div class="t_line_box">
            <i class="t_r_line"></i>
            <i class="r_t_line"></i>
          </div>
          <div class="t_line_box">
            <i class="b_l_line"></i>
            <i class="l_b_line"></i>
          </div>
          <div class="t_line_box">
            <i class="b_r_line"></i>
            <i class="r_b_line"></i>
          </div>
          <div id="chart3"></div>
        </div>
      </div>
      <div class="centerContent">
        <div class="chart4"></div>
        <div class="elseContent">
          <div class="chart4"></div>
          <div class="chart5"></div>
          <div class="chart6"></div>
        </div>
      </div>
      <div class="rightContent">
        <div class="chart7"></div>
        <div class="chart8"></div>
        <div class="chart9"></div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import chart1 from "../data/chart1";
import chart3 from "../data/chart3";
// import * as echarts from "echarts";
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var chartDom1 = document.getElementById("chart1");
      var chartDom3 = document.getElementById("chart3");
      chart1(chartDom1);
      chart3(chartDom3);
    },
  },
};
</script>
<style scoped lang="scss">
.home {
  // background: url("../assets/homeBg.png") no-repeat cover;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: scroll;
  overflow-x: hidden;
  .header {
    background: #000433;
    height: 80px;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .title {
    padding-left: 20px;
    background: #000433;
    img {
      vertical-align: middle;
      margin-right: 10px;
    }
    text-align: left;
    color: #92e9ff;
  }
  .content {
    background: #000433;
    padding: 15px 20px;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    .leftContent {
      float: left;
      width: 22%;
    }
    .centerContent {
      width: 54%;
      margin: 0 1%;
      float: left;
    }
    .rightContent {
      width: 22%;
      float: right;
    }
    .chartTitle {
      line-height: 33px;
      position: absolute;
      color: #92e9ff;
      font-size: 16px;
      box-sizing: border-box;
      z-index: 1000;
      width: 100%;
      text-align: center;
    }
    .t_line_box {
      position: absolute;
      width: 100%;
      height: 100%;
      i {
        background-color: #92e9ff;
        box-shadow: 0px 0px 10px #92e9ff;
        position: absolute;
      }
      .t_l_line {
        height: 5px;
        width: 26px;
        left: -3px;
        top: -3px;
      }
      .l_t_line {
        width: 5px;
        height: 24px;
        left: -3px;
        top: -3px;
      }
      .t_r_line {
        height: 5px;
        width: 26px;
        right: -3px;
        top: -3px;
      }
      .r_t_line {
        width: 5px;
        height: 24px;
        right: -3px;
        top: -3px;
      }
      .l_b_line {
        width: 5px;
        height: 24px;
        left: -3px;
        bottom: -3px;
      }
      .b_l_line {
        height: 5px;
        width: 26px;
        left: -3px;
        bottom: -3px;
      }
      .r_b_line {
        width: 5px;
        height: 24px;
        right: -3px;
        bottom: -3px;
      }
      .b_r_line {
        height: 5px;
        width: 26px;
        right: -3px;
        bottom: -3px;
      }
    }
    .chart1 {
      height: 300px;
      border: 1px solid #2c58a6;
      box-shadow: 0 0 10px #2c58a6;
      border-radius: 6px;
      position: relative;

      #chart1 {
        height: 300px;
      }
    }
    .chart2 {
      height: 300px;
      background: black;
    }
    .chart3 {
      height: 300px;
      border: 1px solid #2c58a6;
      box-shadow: 0 0 10px #2c58a6;
      border-radius: 6px;
      position: relative;
      #chart3 {
        height: 300px;
      }
    }
    .chart4 {
      height: 300px;
      background: rgb(57, 53, 63);
    }
    .chart5 {
      height: 300px;
      background: rgb(162, 19, 175);
    }
    .chart6 {
      height: 300px;
      background: rgb(35, 101, 177);
    }
    .chart7 {
      height: 300px;
      background: rgb(36, 172, 165);
    }
    .chart8 {
      height: 300px;
      background: rgb(32, 190, 66);
    }
    .chart9 {
      height: 300px;
      background: rgb(111, 163, 15);
    }
  }
}
</style>
