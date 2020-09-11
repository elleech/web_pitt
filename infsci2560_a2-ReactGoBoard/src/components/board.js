import React, { Component } from "react";
import { Intersect } from "./intersect";
import "./board.css";

class Board extends Component {
  renderIntersect(i) {
    return (
      <Intersect
        value={this.props.marks[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  createBoard() {
    let board = [];
    for (let i = 0; i < 9; i++) {
      let row = [];
      for (let j = i * 10; j < i * 10 + 9; j++) {
        row.push(<span>{this.renderIntersect(j)}</span>);
      }
      board.push(<div className="row">{row}</div>);
    }
    return board;
  }

  render() {
    return (
      <div>
        <div className="container">{this.createBoard()}</div>
      </div>
    );
  }
}

export { Board };
