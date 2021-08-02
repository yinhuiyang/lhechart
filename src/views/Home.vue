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
        <Chart
          :key="1"
          :imgSrc="imgSrc"
          :titleImg="titleImg"
          :title="'街道空置率'"
          :id="'chart1'"
        />
        <Chart
          :key="2"
          :imgSrc="imgSrc"
          :titleImg="titleImg"
          :title="'商用类型房屋空置率'"
          :id="'chart2'"
        />
        <Chart
          :key="3"
          :imgSrc="imgSrc"
          :titleImg="titleImg"
          :title="'电梯'"
          :id="'chart3'"
        />
      </div>
      <div class="centerContent">
        <div
          class="chart4 chart mt20"
          :style="
            'background:url(' +
            imgSrc2 +
            ');background-size: 100%;background-repeat: no-repeat;'
          "
        >
          <div class="chartTitle">
            <span>罗湖区空置率热力图</span>
            <img src="../assets/title2.png" alt="" />
          </div>
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
          <div id="chart4"></div>
        </div>
        <div class="elseContent">
          <Chart
            :key="5"
            :imgSrc="imgSrc1"
            :titleImg="titleImg2"
            :title="'面积'"
            :id="'chart5'"
          />
          <Chart
            :key="6"
            :imgSrc="imgSrc1"
            :titleImg="titleImg2"
            :title="'深圳市罗湖区莲塘街道'"
            :id="'chart6'"
          />
          <Chart
            :key="7"
            :imgSrc="imgSrc1"
            :titleImg="titleImg2"
            :title="'建筑空置率'"
            :id="'chart7'"
          />
        </div>
      </div>
      <div class="rightContent">
        <Chart
          :key="8"
          :imgSrc="imgSrc"
          :titleImg="titleImg1"
          :title="'房屋状态'"
          :id="'chart8'"
        />
        <Chart
          :key="9"
          :imgSrc="imgSrc"
          :titleImg="titleImg"
          :title="'空置时长'"
          :id="'chart9'"
        />
        <Chart
          :key="10"
          :imgSrc="imgSrc"
          :titleImg="titleImg"
          :title="'空置率走势图'"
          :id="'chart10'"
        />
      </div>
    </div>
  </div>
</template>
<script>
import chart1 from "../data/chart1";
import chart3 from "../data/chart3";
import chart6 from "../data/chart7";
import chart7 from "../data/chart7";
import chart8 from "../data/chart8";
// import * as echarts from "echarts";
import Chart from "./components/chart.vue";
export default {
  name: "Home",
  components: {
    Chart,
  },
  data() {
    return {
      imgSrc: require("../assets/bg1.png"),
      imgSrc1: require("../assets/bg5.png"),
      imgSrc2: require("../assets/bg3.png"),
      titleImg: require("../assets/title1.png"),
      titleImg1: require("../assets/title2.png"),
      titleImg2: require("../assets/title3.png"),
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var chartDom1 = document.getElementById("chart1");
      var chartDom3 = document.getElementById("chart3");
      var chartDom6 = document.getElementById("chart6");
      var chartDom7 = document.getElementById("chart7");
      var chartDom8 = document.getElementById("chart8");
      chart1(chartDom1);
      chart3(chartDom3);
      chart6(chartDom6);
      chart7(chartDom7);
      chart8(chartDom8);
    },
  },
};
</script>
<style lang="scss">
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
    padding: 0 20px 20px 20px;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    .leftContent {
      float: left;
      width: 22%;
      img {
        display: block;
        margin-top: 10px;
        width: 100%;
      }
    }
    .centerContent {
      width: 54%;
      margin: 0 1%;
      float: left;
      img {
        display: block;
        margin-top: 10px;
        width: 100%;
      }
    }
    .rightContent {
      width: 22%;
      float: right;
      img {
        display: block;
        margin-top: 10px;
        width: 100%;
      }
    }
    .centerContent {
      .elseContent {
        display: flex;
        height: 445px;
      }
    }
  }
}
</style>
