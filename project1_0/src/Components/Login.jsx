import $ from "jquery";
import {} from "jquery.cookie";
import React, { Component } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };
class Login extends Component {
  state = {
    login_email: "",
    loginStyle: "inline-block",
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

  memberLogin = () => {
    const send_param = {
      headers,
      email: this.emailE_Login.value,
      pw: this.pwE_Login.value
    };
    axios
      .post("http://localhost:8080/member/login", send_param)
      .then(returnData => {
        if (returnData.data.email) {
          $.cookie("login_email", returnData.data.email);
          $.cookie("login_no", returnData.data.no);
          alert(returnData.data.message);

          this.setState({
            login_email: returnData.data.email
          });
          window.location.reload();
        } else {
          alert("로그인 실패");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const loginStyle = {
      display: this.state.loginStyle
    };
    const logoutStyle = {
      display: this.state.logoutStyle
    };
    let login_email;
    if ($.cookie("login_email")) {
      login_email = $.cookie("login_email");
      loginStyle.display = "none";
      logoutStyle.display = "inline-block";
    }

    return (
      <div>
        <div style={loginStyle}>
          <h2>로그인</h2>
          이메일<input ref={ref => (this.emailE_Login = ref)}></input>
          <br />
          비밀번호<input ref={ref => (this.pwE_Login = ref)}></input>
          <br />
          <button onClick={this.memberLogin}>로그인</button>
        </div>

        <div style={logoutStyle}>
          {login_email}님 환영합니다.
          <button onClick={this.memberLogout}>로그아웃</button>
        </div>
      </div>
    );
  }
}

export default Login;
