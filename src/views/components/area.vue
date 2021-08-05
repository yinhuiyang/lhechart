<template>
  <div class="areaChart">
    <div class="area area1" :id="!showOpa1 ? 'opa' : ''">
      <div class="innerDiv" @click="changeImg(1, 'a11')">
        <img :src="img1" alt="" />
        <span class="areaName">清水河街道</span>
      </div>
    </div>
    <div class="area area2" :id="!showOpa2 ? 'opa' : ''">
      <div class="innerDiv" @click="changeImg(2, 'a22')">
        <img :src="img2" alt="" />
        <span class="areaName">东晓街道</span>
      </div>
    </div>
    <div class="area area3" :id="!showOpa3 ? 'opa' : ''">
      <div class="innerDiv" @click="changeImg(3, 'a33')">
        <img :src="img3" alt="" />
        <span class="areaName">东湖街道</span>
      </div>
    </div>

    <div class="area area4" :id="!showOpa4 ? 'opa' : ''">
      <div class="innerDiv" @click="changeImg(4, 'a44')">
        <img :src="img4" alt="" />
        <span class="areaName">笋岗街道</span>
      </div>
    </div>

    <div class="area area5" :id="!showOpa5 ? 'opa' : ''">
      <div class="innerDiv" @click="changeImg(5, 'a55')">
        <img :src="img5" alt="" />
        <span class="areaName">翠竹街道</span>
      </div>
    </div>

    <div class="area area6" :id="!showOpa6 ? 'opa' : ''">
      <div class="innerDiv" @click="changeImg(6, 'a66')">
        <img :src="img6" alt="" />
        <span class="areaName">黄贝街道</span>
      </div>
    </div>

    <div class="area area7" :id="!showOpa7 ? 'opa' : ''">
      <div class="innerDiv" @click="changeImg(7, 'a77')">
        <img :src="img7" alt="" />
        <span class="areaName">莲塘街道</span>
      </div>
    </div>

    <div class="area area8" :id="!showOpa8 ? 'opa' : ''">
      <div class="innerDiv" @click="changeImg(8, 'a88')">
        <img :src="img8" alt="" />
        <span class="areaName">桂园街道</span>
      </div>
    </div>

    <div class="area area9" :id="!showOpa9 ? 'opa' : ''">
      <div class="innerDiv" @click="changeImg(9, 'a99')">
        <img :src="img9" alt="" />
        <span class="areaName">东门街道</span>
      </div>
    </div>

    <div class="area area10" :id="!showOpa10 ? 'opa' : ''">
      <div class="innerDiv" @click="changeImg(10, 'a1010')">
        <img :src="img10" alt="" />
        <span class="areaName">南湖街道</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img1: require("../../assets/a1.png"),
      img2: require("../../assets/a2.png"),
      img3: require("../../assets/a3.png"),
      img4: require("../../assets/a4.png"),
      img5: require("../../assets/a5.png"),
      img6: require("../../assets/a6.png"),
      img7: require("../../assets/a77.png"),
      img8: require("../../assets/a8.png"),
      img9: require("../../assets/a9.png"),
      img10: require("../../assets/a10.png"),
      showOpa1: false,
      showOpa2: false,
      showOpa3: false,
      showOpa4: false,
      showOpa5: false,
      showOpa6: false,
      showOpa7: true,
      showOpa8: false,
      showOpa9: false,
      showOpa10: false,
    };
  },
  methods: {
    changeImg(type, name) {
      for (let i = 1; i < 11; i++) {
        if (i !== type) {
          this["showOpa" + i] = false;
          this["img" + i] = require("../../assets/a" + i + ".png");
        } else {
          this["img" + i] = require("../../assets/" + name + ".png");
          this["showOpa" + i] = true;
        }
      }
    },
  },
};
</script>

<style lang="scss">
.areaChart {
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
  #opa {
    opacity: 0.6;
  }
  .area {
    cursor: pointer;
    position: absolute;
    text-align: center;
    background-size: 100%;
    background-repeat: no-repeat;
    display: inline-block;
    .innerDiv {
      display: inline-block;
      position: relative;
      img {
        width: 100%;
        height: auto;
      }
    }
    .areaName {
      color: #fff;
      font-size: 10px;
      z-index: 100;
      position: absolute;
      top: 35%;
      width: 100%;
      display: inline-block;
      left: 0;
    }
  }
  .area1 {
    top: 0;
    left: 4%;
    width: 28%;
  }
  .area2 {
    top: 20px;
    left: 32%;
    width: 12%;
  }
  .area3 {
    width: 48%;
    top: -40px;
    left: 44%;
  }
  .area4 {
    width: 12%;
    top: 26%;
    left: 19%;
    .areaName {
      top: 43%;
    }
  }
  .area5 {
    width: 14%;
    top: 90px;
    left: 31%;
  }
  .area6 {
    top: 80px;
    left: 43%;
    width: 22%;
    .areaName {
      left: -28px;
    }
  }
  .area7 {
    top: 65px;
    left: 55%;
    width: 28%;
  }
  .area8 {
    top: 150px;
    left: 19%;
    width: 11%;
  }
  .area9 {
    top: 155px;
    left: 30%;
    width: 11%;
  }
  .area10 {
    top: 192px;
    left: 23%;
    width: 20%;
  }
}
</style>