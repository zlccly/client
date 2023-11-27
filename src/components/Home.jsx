import React from 'react'
import { getStuListApi } from '../api/stuApi';
import { useState, useEffect } from 'react';
import Alert from './Alert';
import { useLocation, NavLink } from 'react-router-dom'

function Home(props) {
    const [stuList, setStuList] = useState([])
    const [searchItem, setSeatchItem] = useState("")
    const [alert, setAlert] = useState(null)
    let location = useLocation()
    // 需要添加依赖性为空数组，表示只执行一次
    useEffect(() => {
        getStuListApi().then(({ data }) => {
            console.log(data, "数据结构");
            setStuList(data)
        })
    }, [])
    // 用于获取跳转到Home组件时传递的state数据
    useEffect(() => {
        console.log(location.state, "获取location");
        if (location.state) {
            setAlert(location.state)
        }
    }, [location])



    const trs = stuList.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td>
                    <NavLink to={`/detail/${item.id}`}>详情</NavLink>
                </td>
            </tr>
        )
    })
    function handleChange() {
    }
    const showAlert = alert ? <Alert {...alert}></Alert> : null



    return (
        <div>
            {showAlert}
            <h1>学生列表</h1>
            <input
                type="text"
                placeholder='搜索'
                value={searchItem}
                onChange={handleChange}
                className="form-control"
            />
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>联系方式</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>


        </div>
    );
}

export default Home;