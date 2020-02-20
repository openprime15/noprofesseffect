import React, { Component } from "react";
import Home from "./Home";
import Contact from "./Contact";
import { Route, NavLink, HashRouter } from "react-router-dom";

class MenuContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
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
              <li></li>
              <li>
                <NavLink to="/contact">회원가입</NavLink>
              </li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}></Route>
              <Route path="/contact" component={Contact}></Route>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default MenuContainer;
