
import { useState } from "react"
import { addStuApi } from "../api/stuApi"
import { useNavigate } from "react-router-dom"
// 该组件有两个功能，添加和修改
function Add(props) {
    const navigate = useNavigate()
    // 创建表单状态
    const [stu, setStu] = useState({
        name: "",
        age: "",
        phone: "",
        email: "",
        education: "",
        graductionSchool: "",
        profession: "",
        profile: "",
    })
    function updateStuInfo(newInfo, key) {
        if (key === "age" && isNaN(newInfo)) {
            return
        }
        const newStuInfo = { ...stu }
        newStuInfo[key] = newInfo.trim()
        setStu(newStuInfo)
    }
    function submitStuInfo(e) {
        e.preventDefault()
        for (const key in stu) {
            if (!stu[key]) {
                alert(`${key}请完善表单的每一项`)
                return
            }
        }
        addStuApi(stu).then(() => {
            // 跳转
            navigate("/home", {
                state: {
                    alert: "用户添加成功",
                    type: "success"
                }
            })
        })
        console.log(stu);

    }
    return (
        <div className='container'>
            <h1 className="page-header">添加用户</h1>
            <form id="myForm" onSubmit={submitStuInfo}>
                <div className="well">
                    <div className="form-group">
                        <label >姓名</label>
                        <input
                            value={stu.name}
                            onChange={(e) => updateStuInfo(e.target.value, "name")}
                            type="text"
                            className='form-control'
                            placeholder='请填写用户姓名'
                        />
                    </div>
                    <div className="form-group">
                        <label >年龄</label>
                        <input
                            value={stu.age}
                            onChange={(e) => updateStuInfo(e.target.value, "age")}
                            type="text"
                            className='form-control'
                            placeholder='请填写用户年龄'
                        />
                    </div>

                    <div className="form-group">
                        <label >电话</label>
                        <input
                            value={stu.phone}
                            onChange={(e) => updateStuInfo(e.target.value, "phone")}
                            type="text"
                            className='form-control'
                            placeholder='请填写用户电话'
                        />
                    </div>
                    <div className="form-group">
                        <label >邮箱</label>
                        <input
                            value={stu.email}
                            onChange={(e) => updateStuInfo(e.target.value, "email")}
                            type="text"
                            className='form-control'
                            placeholder='请填写用户邮箱'
                        />
                    </div>
                    <div className="form-group">
                        <label >学历</label>
                        <input
                            value={stu.education}
                            onChange={(e) => updateStuInfo(e.target.value, "education")}
                            type="text"
                            className='form-control'
                            placeholder='请填写用户学历'
                        />
                    </div>
                    <div className="form-group">
                        <label >毕业学校</label>
                        <input
                            value={stu.graductionSchool}
                            onChange={(e) => updateStuInfo(e.target.value, "graductionSchool")}
                            type="text"
                            className='form-control'
                            placeholder='请填写用户毕业学校'
                        />
                    </div>
                    <div className="form-group">
                        <label >职业</label>
                        <input
                            value={stu.profession}
                            onChange={(e) => updateStuInfo(e.target.value, "profession")}
                            type="text"
                            className='form-control'
                            placeholder='请填写用户职业'
                        />
                    </div>
                    <div className="form-group">
                        <label >个人简介</label>
                        <textarea className='form-control'
                            placeholder="请简单的介绍一下你自己，包括兴趣。爱好信息..."
                            rows="10"
                            value={stu.profile}
                            onChange={(e) => updateStuInfo(e.target.value, "profile")}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">确认添加</button>
                </div>
            </form>
        </div>
    );
}

export default Add;