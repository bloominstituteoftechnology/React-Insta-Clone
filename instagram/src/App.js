import React, { Component } from "react";
import "./App.css";
import PostPage from "./components/PostContainer/PostPage";
import SearchBar from "./components/SearchBar/SearchBar";
import Authenticate from "./components/Authentication/Authenticate";

const PostPageAuthed = Authenticate(PostPage);

class App extends Component {
  state = {
    username: "",
    password: "",
    credentials: localStorage.getItem("credentials")
  };

  handleCreds = credentials => {
    if (!credentials) localStorage.removeItem("credentials");
    this.setState({ credentials });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const authKey = `${this.state.username} is logged in`;
    localStorage.setItem("credentials", authKey);
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <div className="App">
        <SearchBar handleCreds={this.handleCreds} />
        <PostPageAuthed
          credentials={this.state.credentials}
          username={this.state.username}
          password={this.state.password}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleCreds={this.handleCreds}
        />
      </div>
    );
  }
}

export default App;
