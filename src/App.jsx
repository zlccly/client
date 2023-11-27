import { Routes, Route, Navigate, NavLink } from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Add from "./components/AddOrEdit";
import Detail from "./components/Detail";
import "./css/App.css"
function App() {
  return (
    <div id="id" className="container">
      {/* 导航栏 */}
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-brand">学生管理系统</div>

          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              {/* <li className="active"><a href="#">主页</a></li>
              <li><a href="#">关于我们</a></li> */}
              <NavLink to="/home" className="navigation">主页</NavLink>
              <NavLink to="/about" className="navigation">关于我们</NavLink>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {/* <li><a href="#">添加用户</a></li> */}
              <NavLink to="/add" className="navigation">添加用户</NavLink>
            </ul>
          </div>
        </div>
      </nav>
      <div className="content"></div>
      {/* 路由 */}
      <Routes>
        {/* 在route组件中书写对应的路由，以及路由所对应的组件 */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Navigate replace to="/home" />} />

        
        
      </Routes>
    </div>
  );
}
export default App;

