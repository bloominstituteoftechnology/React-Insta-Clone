import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      newComment: ""
    };
  }

  // change comments property by adding another index value to that array "comments" on each individual post from dummyData

  // changeComment = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  //   console.log("changeComment ran!");
  // }

  // componentDidMount() {
  //   this.setState({
  //     dummyData: dummyData
  //   });
  //   // window.localStorage.setItem()
  // }

  componentDidMount() {
    // will be called third
    this.setState({ dummyData: dummyData }); // preferable for Async calls... AJAX
    if (window.localStorage.getItem("comments")) {
      this.setState({
        posts: JSON.parse(window.localStorage.getItem("comments"))
      }); // preferable for Async calls... AJAX
    } 
    window.localStorage.setItem("comments", JSON.stringify(dummyData));
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer 
          dummyData={this.state.dummyData}
          handleAddComment={this.addComment}
          handleChangeComment={this.changeComment}
        />
      </div>
    );
  }
}

export default App;
