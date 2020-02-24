import React, { Component } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Contact extends Component {
  state = {
    name: ""
  };
  memberInsert = () => {
    const send_param = {
      headers,
      name: this.nameE.value,
      email: this.emailE_Contact.value,
      pw: this.pwE_Contact.value,
      comments: this.commentsE.value
    };

    axios
      .post("http://localhost:8080/member/insert", send_param)
      .then(returnData => {
        alert(returnData.data.message);
        window.location.href = "/login#/login";
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h2>Contact</h2>
        <p>회원가입</p>
        이름<input ref={ref => (this.nameE = ref)}></input>
        <br />
        이메일<input ref={ref => (this.emailE_Contact = ref)}></input>
        <br />
        비밀번호<input ref={ref => (this.pwE_Contact = ref)}></input>
        <br />
        comments<input ref={ref => (this.commentsE = ref)}></input>
        <br />
        <button onClick={this.memberInsert}>회원가입</button>
      </div>
    );
  }
}

export default Contact;
