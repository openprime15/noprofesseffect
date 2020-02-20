import React, { Component } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Home extends Component {
  state = [];

  addBoard = () => {
    const send_param = {
      headers,
      nick: this._BoardNick.value,
      comments: this._Comments.value
    };

    axios
      .post("http://localhost:8080/board/insert", send_param)
      .then(returnData => {
        alert(returnData.data.message);
      })
      .catch(err => {
        console.log(err);
      });

    // alert(this._BoardNick.value);
  };

  render() {
    return (
      <div>
        <div>
          닉네임<input ref={ref => (this._BoardNick = ref)}></input>
          내용
          <input type="text" ref={ref => (this._Comments = ref)}></input>
          <button onClick={this.addBoard}>글 게시</button>
        </div>
        <div>
          <h2>글제목</h2>
          <p>글내용~~</p>
        </div>
      </div>
    );
  }
}

export default Home;
