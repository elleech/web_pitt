import React, { Component } from "react";
import "./intersect.css";

class Intersect extends Component {
  render() {
    let className = "intersect";

    if (this.props.value === "Black") {
      className += " blackStone";
    } else if (this.props.value === "White") {
      className += " whiteStone";
    } else {
      className = "intersect";
    }

    return (
      <button
        className={className}
        onClick={() => this.props.onClick()}
      ></button>
    );
  }
}

export { Intersect };
