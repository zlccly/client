
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { addStuListAsync, editStuListAsync } from '../redux/stuSlice'
import { useSelector, useDispatch } from 'react-redux'

// 该组件有两个功能，添加和修改
function Add(props) {
    const { stuList } = useSelector(state => state.stu)
    // 根据是否有id来决定是添加还是修改
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
    useEffect(() => {
        if (id) {
            // dispatch()
            // getStuByIdApi(id).then(({ data }) => {
            //     console.log(data, "根据ID获取信息")
            //     setStu(data)
            // })
            setStu(stuList.filter(item => item.id === ~~id)[0])
        }
    }, [id, stuList])
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
        if (id) {
            dispatch(editStuListAsync({id, stu}))
            navigate("/home", {
                state: {
                    alert: "学生修改成功",
                    type: "info"
                }
            })

        } else {
            dispatch(addStuListAsync(stu))
            navigate("/home", {
                state: {
                    alert: "学生添加成功",
                    type: "success"
                }
            })
        }
        console.log(stu);

    }
    return (
        <div className='container'>
            <h1 className="page-header">{id ? "修改学生" : "添加学生"}</h1>
            <form id="myForm" onSubmit={submitStuInfo}>
                <div className="well">
                    <div className="form-group">
                        <label >姓名</label>
                        <input
                            value={stu.name}
                            onChange={(e) => updateStuInfo(e.target.value, "name")}
                            type="text"
                            className='form-control'
                            placeholder='请填写学生姓名'
                        />
                    </div>
                    <div className="form-group">
                        <label >年龄</label>
                        <input
                            value={stu.age}
                            onChange={(e) => updateStuInfo(e.target.value, "age")}
                            type="text"
                            className='form-control'
                            placeholder='请填写学生年龄'
                        />
                    </div>

                    <div className="form-group">
                        <label >电话</label>
                        <input
                            value={stu.phone}
                            onChange={(e) => updateStuInfo(e.target.value, "phone")}
                            type="text"
                            className='form-control'
                            placeholder='请填写学生电话'
                        />
                    </div>
                    <div className="form-group">
                        <label >邮箱</label>
                        <input
                            value={stu.email}
                            onChange={(e) => updateStuInfo(e.target.value, "email")}
                            type="text"
                            className='form-control'
                            placeholder='请填写学生邮箱'
                        />
                    </div>
                    <div className="form-group">
                        <label >学历</label>
                        <input
                            value={stu.education}
                            onChange={(e) => updateStuInfo(e.target.value, "education")}
                            type="text"
                            className='form-control'
                            placeholder='请填写学生学历'
                        />
                    </div>
                    <div className="form-group">
                        <label >毕业学校</label>
                        <input
                            value={stu.graductionSchool}
                            onChange={(e) => updateStuInfo(e.target.value, "graductionSchool")}
                            type="text"
                            className='form-control'
                            placeholder='请填写学生毕业学校'
                        />
                    </div>
                    <div className="form-group">
                        <label >职业</label>
                        <input
                            value={stu.profession}
                            onChange={(e) => updateStuInfo(e.target.value, "profession")}
                            type="text"
                            className='form-control'
                            placeholder='请填写学生职业'
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
                    <button type="submit" className="btn btn-primary">{id ? "确认修改" : "确认添加"}</button>
                </div>
            </form>
        </div>
    );
}

export default Add;