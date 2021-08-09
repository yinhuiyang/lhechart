import router from "./router";
// import store from "./store";
// import { Message } from "element-ui";
import { getToken } from "@/utils/auth"; // get token from cookie

const whiteList = ["/"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();
  if (hasToken) {
    next();
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/`);
    }
  }
});
