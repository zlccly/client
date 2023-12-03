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

// 根据id获取学生详细信息
export function getStuByIdApi(id) {
    return request({
        url: `/students/${id}`,
        method: "GET",
    })
}

// 根据ids删除学生
export function deleteStuByIdApi(id) {
    return request({
        url: `/students/${id}`,
        method: "DELETE",
    })
}

// 根据id编辑学生信息
export function editStuByIdApi(id, data) {
    return request({
        url: `/students/${id}`,
        method: "PATCH",
        data
    })
}

