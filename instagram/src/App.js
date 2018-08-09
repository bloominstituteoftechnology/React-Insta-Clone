import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import CommentSection from "./components/CommentSection/CommentSection";
import Authenticate from "./components/Authenticate/Authenticate";

const AuthenticateContainer = Authenticate(PostContainer);
class App extends Component {
  constructor() {
    super();
    this.state = { data: dummyData };
  };

  render() {
    return (
      <div>
        <div className="appcontainer">
          <SearchBar />
          <AuthenticateContainer />
          {this.state.data.map(obj => <PostContainer obj={obj} />)}
        </div>
      </div>
    );
  }
}

export default App;
