import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./style/index.css";
import ECharts from "vue-echarts"; // 在 webpack 环境下指向 components/ECharts.vue
import "@/permission";
// 手动引入 ECharts 各模块来减小打包体积
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
import "echarts/lib/component/markLine";
import "echarts/lib/component/graphic";

// 如果需要配合 ECharts 扩展使用，只需要直接引入扩展包即可
// 以 ECharts-GL 为例：
// 需要安装依赖：npm install --save echarts-gl，并添加如下引用
import "echarts-gl";

// 注册组件后即可使用
Vue.component("v-chart", ECharts);
import axios from "axios";

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
Vue.use(ElementUI, {});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
