import React, { Component } from "react";
import { Game } from "./components/game";

class App extends Component {
  render() {
    return (
      <div className="app-component">
        <Game />
      </div>
    );
  }
}

export default App;
