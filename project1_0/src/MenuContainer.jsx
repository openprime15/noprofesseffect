import $ from "jquery";
import {} from "jquery.cookie";
import React, { Component } from "react";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import { Route, NavLink, HashRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class MenuContainer extends Component {
  state = {
    loginStyle: "",
    logoutStyle: "none"
  };

  memberLogout = () => {
    axios
      .get("http://localhost:8080/member/logout", { headers })
      .then(returnData => {
        if (returnData.data.message) {
          $.removeCookie("login_email");
          $.removeCookie("login_no");

          this.setState({
            login_email: "",
            loginStyle: "inline-block",
            logoutStyle: "none"
          });
          window.location.reload();
        }
      });
  };

  render() {
    const loginStyle = {
      display: this.state.loginStyle
    };
    const logoutStyle = {
      display: this.state.logoutStyle
    };
    if ($.cookie("login_email")) {
      loginStyle.display = "none";
      logoutStyle.display = "show";
    }

    return (
      <div>
        <HashRouter>
          <div>
            <h1>목표달성 SNS</h1>
            <ul className="header">
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">회원가입</NavLink>
              </li>
              <li style={loginStyle}>
                <NavLink to="/login">로그인</NavLink>
              </li>
              <li style={logoutStyle}>
                <NavLink exact to="/" onClick={this.memberLogout}>
                  로그아웃
                </NavLink>
              </li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/login" component={Login}></Route>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default MenuContainer;
