import React, { Component } from "react";
import PostPage from "./components/PostContainer/PostPage";
import dummyData from "./dummy-data";
import authenticate from './components/Authentication/Authenticate';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comments: [],
      likes: [],
      filter: "",
      // UserName: "",
      // Password: ""
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData,
      comments: dummyData.comments,
      likes: dummyData.likes
    });
  }

  handleInputChange = event => {
    this.setState({
      filter: event.target.value
    });
  };

  // handleLoginChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  loginSubmit = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  filterItems = event => {
    event.preventDefault();
    if (this.state.filter === "") {
      return this.setState({
        data: dummyData
      });
    }
    let filtered = this.state.data.filter(item => {
      return item.username === this.state.filter;
    });
    this.setState({
      data: filtered
    });
  };

  render() {
    return (
      <PostPage
        data={this.state.data}
        comments={this.state.comments}
        likes={this.state.likes}
        handleInputChange={this.handleInputChange}
        filterItems={this.filterItems}
        filter={this.state.filter}
      />
    );
  }
}

export default authenticate(App);
