import React, { Component } from "react";
import LoginProtected from "./container/LoginProtected";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginProtected />
      </div>
    );
  }
}

export default App;
