import React, { PureComponent } from "react";
import "./MenuButton.css";

class MenuButton extends PureComponent {
  render() {
    return (
      <button
        id="roundButton"
        onMouseDown={this.props.handleMouseDown}
      ></button>
    );
  }
}

export default MenuButton;
