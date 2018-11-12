import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import {
  faComment,
  faHeart,
  faUser,
  faCompass,
  faTimesCircle
} from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(
  faInstagram,
  faComment,
  faHeart,
  faUser,
  faCompass,
  faEllipsisH,
  faSearch,
  faTimesCircle
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
      addComment: ""
    };
  }

  // handleChange = ev => {
  //   this.setState({
  //     [ev.target.name]: ev.target.value
  //   });
  // };

  // addComment = ev => {
  //   ev.preventDefault();
  //   if (this.state.addComment === "") {
  //     return alert("Please write your todo item!");
  //   }
  //   this.setState({
  //     data: [
  //       ...this.state.todo,
  //       {
  //         task: this.state.inputText,
  //         id: Date.now(),
  //         completed: false
  //       }
  //     ],
  //     inputText: ""
  //   });
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <SearchBar />
        {this.state.data.map(item => (
          <PostContainer
            key={item.timestamp}
            post={item}
            comment={this.state.addComment}
            handleChange={this.handleChange}
          />
        ))}
      </div>
    );
  }
}

export default App;
