import $ from "jquery";
import {} from "jquery.cookie";
import React, { Component } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Home extends Component {
  state = {
    writeStyle: "none",
    posts: []
  };

  componentWillMount = () => {
    axios
      .get("http://localhost:8080/board/view", { headers })
      .then(returnData => {
        alert(returnData.data.posts);
      });
  };

  addBoard = () => {
    const send_param = {
      headers,
      title: this._BoardTitle.value,
      comments: this._Comments.value,
      no: $.cookie("login_no")
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
    const writeStyle = {
      display: this.state.writeStyle
    };
    if ($.cookie("login_email")) {
      writeStyle.display = "inline-block";
    }

    return (
      <div>
        <div style={writeStyle}>
          제목<input ref={ref => (this._BoardTitle = ref)}></input>
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
