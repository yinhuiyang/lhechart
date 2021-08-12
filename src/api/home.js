import request from "@/utils/request";
export function getAreaData(data) {
  return request({
    url: "/api/home/tongji",
    method: "post",
    data,
  });
}
