import React from 'react';
import { getStuListApi } from '../api/stuApi';
import { useState, useEffect } from 'react';

function Home(props) {
    // 需要添加依赖性为空数组，表示只执行一次
    useEffect(() => {
        getStuListApi().then(({ data }) => {
            console.log(data, "数据结构");
            setStuList(data)
        })
    }, [])
    const [stuList, setStuList] = useState([])
    const [searchItem, setSeatchItem] = useState("")
    const trs = stuList.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td>详情</td>
            </tr>
        )
    })
    function handleChange() {
    }


    return (
        <div>
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