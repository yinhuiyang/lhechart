<template>
  <div class="home">
    <div class="header">
      <img src="../assets/bg.png" alt="" />
    </div>
    <div class="title">
      <img src="../assets/location.png" alt="" />
      <span>深圳市罗湖区{{ name }}</span>
    </div>
    <div class="content">
      <div class="leftContent">
        <Chart
          :render="render"
          :areaData="areaData"
          :key="count + 1"
          :imgSrc="imgSrc"
          :titleImg="titleImg"
          :title="'街道空置率'"
          :id="'chart1'"
        />
        <Chart
          :key="count + 2"
          :imgSrc="imgSrc"
          :titleImg="titleImg"
          :title="'商用类型房屋空置率'"
          :id="'chart2'"
        />
        <Chart
          :key="count + 3"
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
            <span class="chart4Title">罗湖区空置率热力图</span>
            <img class="titlImg" src="../assets/title2.png" alt="" />
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
          <div id="chart4">
            <Area />
          </div>
        </div>
        <div class="elseContent">
          <Chart
            :key="count + 5"
            :areaData="areaData"
            :imgSrc="imgSrc1"
            :titleImg="titleImg2"
            :title="'面积'"
            :id="'chart5'"
          />
          <Chart
            :key="count + 6"
            :imgSrc="imgSrc1"
            :titleImg="titleImg2"
            :title="'深圳市罗湖区' + name"
            :id="'chart6'"
          />
          <Chart
            :key="count + 7"
            :imgSrc="imgSrc1"
            :titleImg="titleImg2"
            :title="'建筑空置率'"
            :id="'chart7'"
          />
        </div>
      </div>
      <div class="rightContent">
        <Chart
          :key="count + 8"
          :imgSrc="imgSrc"
          :titleImg="titleImg1"
          :title="'房屋状态'"
          :id="'chart8'"
        />
        <Chart
          :key="count + 9"
          :imgSrc="imgSrc"
          :titleImg="titleImg"
          :title="'空置时长'"
          :id="'chart9'"
        />
        <Chart
          :key="count + 10"
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
import Chart from "./components/chart.vue";
import Area from "./components/area.vue";
import { getAreaData } from "@/api/home";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    Chart,
    Area,
  },
  computed: {
    ...mapGetters(["name", "id"]),
  },
  watch: {
    "$store.state.name"(newVal) {
      this.areaName = newVal;
      this.init();
    },
  },
  data() {
    return {
      imgSrc: require("../assets/bg1.png"),
      imgSrc1: require("../assets/bg5.png"),
      imgSrc2: require("../assets/bg3.png"),
      titleImg: require("../assets/title1.png"),
      titleImg1: require("../assets/title2.png"),
      titleImg2: require("../assets/title3.png"),
      count: 1,
      render: false,
      areaData: {},
      areaName: "莲塘街道",
    };
  },
  beforeMount() {
    this.init();
  },
  methods: {
    async init() {
      let data = {
        street: this.areaName,
      };
      let res = await getAreaData(data);
      this.render = true;
      this.count += 100;
      if (res.code === 1) {
        this.areaData = res.data;
      } else {
        this.$message({
          message: res.msg,
          type: "error",
        });
      }
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
    width: 100%;
    position: fixed;
    z-index: 10000;
    img {
      width: 100%;
    }
  }
  .title {
    padding-left: 20px;
    background: #000433;
    padding-top: 101px;
    z-index: 9999;
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
      .titlImg {
        display: block;
        margin-top: 10px;
        width: 100%;
      }
      .chart4 {
        width: 100%;
        height: 470px;
        background: rgb(57, 53, 63);
        .chart4Title {
          font-size: 20px;
        }
        #chart4 {
          width: 716px;
          height: 100%;
          padding-top: 130px;
          box-sizing: border-box;
          margin: 0 auto;
        }
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
