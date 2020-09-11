import React, { Component } from "react";
import { Board } from "./board";
import "./game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          marks: Array(81).fill(null)
        }
      ],
      isNextWhite: true,
      step: 0,
      isRemoveActivated: false,
      cntEliminatedBlack: 0,
      cntEliminatedWhite: 0,
      records: []
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.step + 1);
    const current = history[history.length - 1];
    const marks = current.marks.slice();

    let isNextWhite = this.state.isNextWhite;
    let cntEliminatedBlack = this.state.cntEliminatedBlack;
    let cntEliminatedWhite = this.state.cntEliminatedWhite;
    let records = this.state.records;

    // Place stone
    if (current.marks[i] === null) {
      marks[i] = isNextWhite ? "Black" : "White";
      records.push(marks[i]);

      this.setState({
        history: history.concat([{ marks: marks }]),
        isNextWhite: !isNextWhite,
        step: history.length,
        records: records
      });

      console.log(
        "Step: " +
          this.state.step +
          "; Posistion: " +
          i +
          "; isNextWhite: " +
          this.state.isNextWhite
      );
      console.log(this.state.records);
    }

    // Remove stone
    // Assumption: Only white would want to remove blacks, and vice versa
    if (this.state.isRemoveActivated && current.marks[i] !== null) {
      if (current.marks[i] === "Black") {
        cntEliminatedBlack += 1;
        isNextWhite = true;
        records.push("White");
      } else if (current.marks[i] === "White") {
        cntEliminatedWhite += 1;
        isNextWhite = false;
        records.push("Black");
      }

      marks[i] = null;

      this.setState({
        history: history.concat([{ marks: marks }]),
        isNextWhite: isNextWhite,
        step: history.length,
        cntEliminatedBlack: cntEliminatedBlack,
        cntEliminatedWhite: cntEliminatedWhite,
        records: records
      });

      console.log(
        "Step: " +
          this.state.step +
          "; Removed position: " +
          i +
          "; isNextWhite: " +
          this.state.isNextWhite
      );
      console.log(this.state.records);
      console.log(current.marks[i])
    }
  }

  handlePass() {
    this.setState({
      isNextWhite: !this.state.isNextWhite
    });

    console.log("Pass. isNextWhite: " + this.state.isNextWhite);
  }

  handleUndo(step) {
    if (step >= 0) {
      let cntEliminatedBlack = this.state.cntEliminatedBlack;
      let cntEliminatedWhite = this.state.cntEliminatedWhite;

      let records = this.state.records;
      const previous = records[records.length - 1];

      if (cntEliminatedBlack > 0 && previous === "White") {
        cntEliminatedBlack -= 1;
      } else if (cntEliminatedWhite > 0 && previous === "Black") {
        cntEliminatedWhite -= 1;
      }

      records.pop();

      this.setState({
        step: step,
        isNextWhite: (previous === "Black"),
        cntEliminatedBlack: cntEliminatedBlack,
        cntEliminatedWhite: cntEliminatedWhite,
        records: records
      });

      console.log(
        "Undo step: " + step + "; isNextWhite: " + this.state.isNextWhite
      );
      console.log(this.state.records);
    }
  }

  isRemoveActivated() {
    this.setState({
      isRemoveActivated: !this.state.isRemoveActivated
    });
    console.log("isRemoveActivated: " + !this.state.isRemoveActivated);
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.step];

    let status = "Next player: " + (this.state.isNextWhite ? "Black" : "White");

    return (
      <div className="game">
        <div className="game-board">
          <Board marks={current.marks} onClick={i => this.handleClick(i)} />
        </div>

        <div className="game-info">
          <div>{status}</div>
          <br />

          <button
            type="button"
            className="btn btn-outline-success align-text-middle" //why align-text-middle useless here?
            onClick={() => this.handlePass()}
          >
            Pass
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => this.handleUndo(this.state.step - 1)}
            disabled={this.state.step - 1 < 0}
          >
            Undo
          </button>
          <br />
          <br />

          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitches"
              readOnly
              onClick={() => this.isRemoveActivated()}
              disabled={this.state.step === 0}
            />
            <label className="custom-control-label" htmlFor="customSwitches">
              Eliminate Stone
            </label>
          </div>

          <div className="badge badge-pill badge-dark">
            Eliminated: {this.state.cntEliminatedBlack} black stone(s)
          </div>
          <br />
          <div className="badge badge-pill badge-light">
            Eliminated: {this.state.cntEliminatedWhite} white stone(s)
          </div>
        </div>
      </div>
    );
  }
}

export { Game };
