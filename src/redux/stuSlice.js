import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStuListApi, deleteStuByIdApi, editStuByIdApi, addStuApi } from "../api/stuApi";

// 初始化仓库
export const getStuListAsync = createAsyncThunk("stu/getStuList", async (_, thunkAPI) => {
    // 发送ajax请求
    const response = await getStuListApi()
    console.log(thunkAPI, "thunk")
    thunkAPI.dispatch(initStuList(response.data))
})

// 删除学生
export const deleteStuListAsync = createAsyncThunk("stu/deleteStuList", async (payload, thunkAPI) => {
    // 发送ajax请求
    deleteStuByIdApi(payload)
    thunkAPI.dispatch(deleteStu(payload))

})

// 添加学生
export const addStuListAsync = createAsyncThunk("stu/addStuList", async (payload, thunkAPI) => {
    // 发送ajax请求
    const { data } = await addStuApi(payload)
    thunkAPI.dispatch(addStu(data))

})

// 编辑学生
export const editStuListAsync = createAsyncThunk("stu/editStuList", async (payload, thunkAPI) => {
    // 发送ajax请求
    const { id, stu } = payload
    editStuByIdApi(id, stu)
    thunkAPI.dispatch(editStu(payload))

})
export const stuSlice = createSlice({
    name: "stu",
    initialState: {
        stuList: [],
    },
    reducers: {
        initStuList: (state, { payload }) => {
            state.stuList = payload
        },
        deleteStu: (state, { payload }) => {
            for (let i = 0; i < state.stuList.length; i++) {
                if (state.stuList[i].id === ~~payload) {
                    state.stuList.splice(i, 1)
                    break
                }
            }
        },
        addStu: (state, { payload }) => {
            state.stuList.push(payload)
        },
        editStu: (state, { payload }) => {
            console.log(payload, "修改信息的信息")
            for (let i = 0; i < state.stuList.length; i++) {
                if (state.stuList[i].id === ~~payload.id) {
                    state.stuList.splice(i, 1, payload.stu)
                    break
                }
            }
        },
        // set: (state, { payload }) => {
        //     state.stuList = payload
        // }
    }
})
const { initStuList, deleteStu, addStu, editStu } = stuSlice.actions
export default stuSlice.reducer