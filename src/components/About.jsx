import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';



function About() {
    return (
        <div>
            <div className="about container" >
                <h1 className='page-header'>使用说明</h1>
                <p>通过次系统来熟悉react以及react router的使用</p>
                <p>联系方式</p>
                <NavLink to="/about/email" className="navigation">邮箱</NavLink>
                <NavLink to="/about/tel" className="navigation">电话</NavLink>
                <Outlet />

            </div>
        </div>
    );
}

export default About;