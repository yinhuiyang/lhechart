<template>
  <div
    :class="id + ' chart mt20'"
    :style="'background-image:url(' + imgSrc + ');'"
  >
    <div class="chartTitle">
      <span>{{ title }}</span>
      <img :src="titleImg" alt="" />
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
    <div :id="id" v-if="id !== 'chart5'"></div>
    <chart5 :areaData="areaData.mian_ji" v-else />
    <span
      class="areaName"
      v-if="id === 'chart6'"
      v-text="$store.state.name"
    ></span>
  </div>
</template>

<script>
import chart1 from "../../data/chart1";
import chart2 from "../../data/chart2";
import chart3 from "../../data/chart3";
import chart5 from "./3Dchart";
import chart6 from "../../data/chart6";
import chart7 from "../../data/chart7";
import chart8 from "../../data/chart8";
import chart9 from "../../data/chart9";
import chart10 from "../../data/chart10";
export default {
  name: "Chart",
  props: {
    areaData: {
      type: Object,
      default: () => {
        return {};
      },
    },
    imgSrc: {
      type: String,
      default: "",
    },
    titleImg: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    render: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  components: {
    chart5,
  },
  mounted() {
    if (this.render) {
      this.init();
    }
  },
  methods: {
    init() {
      var chartDom1 = document.getElementById("chart1");
      var chartDom2 = document.getElementById("chart2");
      var chartDom3 = document.getElementById("chart3");
      //   var chartDom5 = document.getElementById("chart5");
      var chartDom6 = document.getElementById("chart6");
      var chartDom7 = document.getElementById("chart7");
      var chartDom8 = document.getElementById("chart8");
      var chartDom9 = document.getElementById("chart9");
      var chartDom10 = document.getElementById("chart10");
      chart1(chartDom1, this.areaData.jie_dao_kong_zhi_lv);
      chart2(chartDom2, this.areaData.shang_yong_lei_xing_fang_wu_kong_zhi_lv);
      chart3(chartDom3, this.areaData.dian_ti);
      //   chart5(chartDom5);
      chart6(chartDom6, this.areaData.lian_tang_jie_dao);
      chart7(chartDom7, this.areaData.jian_zhu_kong_zhi_lv);
      chart8(chartDom8, this.areaData.fang_wu_zhuang_tai);
      chart9(chartDom9, this.areaData.kong_zhi_shi_chang);
      chart10(chartDom10, this.areaData.kong_zhi_zou_shi_tu);
    },
  },
};
</script>

<style lang="scss">
.chartTitle {
  position: absolute;
  color: #92e9ff;
  font-size: 16px;
  box-sizing: border-box;
  z-index: 1000;
  width: 100%;
  text-align: center;
  span {
    display: inline-block;
    padding-top: 10px;
  }
  img {
    width: 100%;
  }
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
.chart {
  height: 296px;
  border: 1px solid #2c58a6;
  box-shadow: 0 0 10px #2c58a6;
  border-radius: 6px;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
}
.chart1 {
  #chart1 {
    height: 296px;
  }
}
.chart2 {
  height: 296px;
  #chart2 {
    height: 296px;
  }
}
.chart3 {
  #chart3 {
    height: 296px;
  }
}

.chart5 {
  height: 440px;
  width: 33%;
  #chart5 {
    height: 440px;
  }
}
.chart6 {
  position: relative;
  height: 440px;
  width: 32%;
  margin-left: 1%;
  #chart6 {
    height: 440px;
  }
  .areaName {
    position: absolute;
    color: #fff;
    bottom: 40px;
    width: 100%;
    left: 0;
  }
}
.chart7 {
  height: 440px;
  width: 33%;
  margin-left: 1%;
  #chart7 {
    height: 440px;
  }
}
.chart8 {
  height: 296px;
  #chart8 {
    height: 296px;
  }
}
.chart9 {
  height: 296px;
  #chart9 {
    height: 296px;
  }
}
.chart10 {
  height: 296px;
  #chart10 {
    height: 296px;
  }
}
</style>
