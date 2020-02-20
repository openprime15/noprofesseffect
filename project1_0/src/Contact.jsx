import React, { Component } from "react";

class Contact extends Component {
  state = {
    name: ""
  };
  memberInsert = () => {};

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
