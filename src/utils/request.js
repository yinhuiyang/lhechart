import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    if (store.getters.token) {
      config.headers["Authorization"] = getToken();
      if (config.method === "post" || config.method === "put") {
        config.data = JSON.stringify(config.data);
        config.headers["Content-Type"] = "application/json";
      }
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const headers = response.headers;
    if (headers["content-type"] === "application/octet-stream;charset=utf-8") {
      return response.data;
    }
    const res = response.data;
    if (typeof res === "string") {
      return res;
    }
    if (response.request.responseURL.includes("exportExcel")) {
      return res;
    }
    // console.log(res)
    // console.log(response.headers['content-type'])
    const apifileType = response.headers["content-type"];
    // if the custom code is not 200, it is judged as an error.
    if (res.code !== 1) {
      if (apifileType.includes("excel")) {
        return res;
      } else {
        Message({
          message: res.msg || "Error",
          type: "error",
          duration: 5 * 1000,
        });

        // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        if (
          res.code === 1003 ||
          res.code === 1004 ||
          res.code === 1005 ||
          res.code === 1008
        ) {
          // to re-login
          MessageBox.confirm("???????????????????????????,???????????????", "????????????", {
            confirmButtonText: "????????????",
            cancelButtonText: "??????",
            type: "warning",
          }).then(() => {
            store.dispatch("user/resetToken").then(() => {
              location.reload();
            });
          });
        }
        return Promise.reject(new Error(res.msg || "Error"));
      }
    } else {
      const headerToken = response.headers["Authorization"];
      if (headerToken) {
        store.dispatch("user/refreshToken", headerToken);
      }
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
