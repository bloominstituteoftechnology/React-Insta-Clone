import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import propTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      searchInput: ""
    };
  }
  componentDidMount() {
    this.setState({
      post: dummyData
    });
  }

  searchHandler = text => {
    if (text === "") {
      this.setState({ post: dummyData });
    } else {
      const searchResults = this.state.post.filter(c => c.username === text);
      this.setState({ post: searchResults });
    }
  };

  search = event => {
    event.preventDefault();
    if (!(this.state.searchInput === "")) {
      this.setState({
        post: [],
        inputText: ""
      });
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar searchHandler={this.searchHandler} />
        <PostContainer posts={this.state.post} user={this.props.user} />
      </div>
    );
  }
}

App.propTypes = { card: propTypes.arrayOf(propTypes.object) };

export default App;
