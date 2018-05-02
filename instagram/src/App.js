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

  componentDidMount() {
    let allTweets = dummyData.slice();
    this.setState({
      tweets: allTweets
    });
  }

  render() {
    console.log(dummyData);
    return (
      <div className="App">
        <SearchBar />
        <PostContainer tweets={this.state.tweets}/>


      </div>
    );
  }
}

export default App;