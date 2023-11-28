import { NavLink } from "react-router-dom"
import "./css/App.css"
import RouterConfig from "./router/router"
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
      <div className="content">
        {/* 路由 */}
        <RouterConfig />
      </div>



    </div>
  );
}
export default App;

