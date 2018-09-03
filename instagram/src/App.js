import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./components/SearchBar/SearchBar.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      igp: [],
      input: ""
    };
  }

  onSearchChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="left-header">
            <div className="logo-img">
              <img
                src="data:image/png;base64,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"
                alt="logo"
              />
            </div>
            <div className="line-img">
              <img
                src="https://www.oliverbothwell.co.uk/img/clock/new/minuteHandm.png"
                alt="line"
              />
            </div>
            <span className="App-title">Instagram</span>
          </div>
          <SearchBar searchChange={this.onSearchChange} />
          <div className="right-header">
            <div className="btn-img">
              <img
                src="http://icons-for-free.com/free-icons/png/512/2180659.png"
                alt="explore"
              />
            </div>
            <div className="btn-img">
              <img
                src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-68-512.png"
                alt="heart"
              />
            </div>
            <div className="btn-img">
              <img
                src="data:image/png;base64,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"
                alt="profile"
              />
            </div>
          </div>
        </header>

        <PostContainer list={this.state.igp} />
      </div>
    );
  }
}

export default App;
