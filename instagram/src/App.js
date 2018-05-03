import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";


class App extends Component {
  constructor() {
    super();

    this.state = {
      tweets: []
    }
  }

  handleAddComment(index) {
    alert("testing");
  }

  handleLike(index) {
    let tempArray = this.state.tweets;
    tempArray[index].likes ++;
    this.setState({
      tweets: tempArray
    })
  }

  componentDidMount() {
    let allTweets = dummyData.slice();
    this.setState({
      tweets: allTweets
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer pressLike={this.handleLike.bind(this)} tweets={this.state.tweets} addComment={this.handleAddComment.bind(this)}/>
      </div>
    );
  }
}

export default App;
