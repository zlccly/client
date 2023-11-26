// 封装请求函数
import request from "./request";
export function getStuListApi() {
    return request({
        url: "/students",
        method: "GET",
    })
}

// 添加学生
export function addStuApi(data) {
    return request({
        url: "/students",
        method: "POST",
        data
    })
}