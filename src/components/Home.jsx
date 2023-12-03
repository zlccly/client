import React from 'react'
// import { getStuListApi } from '../api/stuApi';
import { useState, useEffect } from 'react';
import Alert from './Alert';
import { useLocation, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
// import { initStuList } from '../redux/stuSlice'
import { getStuListAsync } from '../redux/stuSlice';

function Home(props) {
    // const [stuList, setStuList] = useState([])
    const [searchItem, setSeatchItem] = useState("")
    const [alert, setAlert] = useState(null)
    let location = useLocation()
    const dispatch = useDispatch()
    const stuList = useSelector(state => state.stu.stuList)

    // 需要添加依赖性为空数组，表示只执行一次
    useEffect(() => {
        if (!stuList.length) {
            dispatch(getStuListAsync())
        }
    }, [stuList, dispatch])
    // 用于获取跳转到Home组件时传递的state数据
    useEffect(() => {
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