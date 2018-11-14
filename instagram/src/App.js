import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      post: [],
    };
  }
  componentDidMount(){
    this.setState({
      post: dummyData,
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header__logo">
            <img
              className="logo__icon"
              src={require("./images/instagram-png-instagram-icon-1600.png")}
              alt="instagram icon"
            />
          </div>
          <div>
            <img
              className="logo__text"
              src={require("./images/logo-instagram.png")}
              alt="instagram logo"
            />
          </div>

          <SearchBar className="search-bar" />
        </header>
        {this.state.post.map(post => (
          <PostContainer key={post.timestamp} post={post} />
        ))}
      </div>
    );
  }
}

export default App;
