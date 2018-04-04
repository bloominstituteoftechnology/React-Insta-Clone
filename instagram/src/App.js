import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js'
import PostContainer from './components/PostContainer/PostContainer.js'
import { dummyData } from './dummy-data.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      thumbnailUrl: "",
      imageUrl:"",
      likes:"",
      timestamp:"",
      comments:""
    }
  }

  componentDidMount() {
    // fetching the data of people
    // set the username on state for use in Username
    this.setState(
      // { username: dummyData.username }, 
      // { thumbnailUrl: dummyData.thumbnailUrl },
      // { imageUrl: dummyData.imageUrl },
      // { likes: dummyData.likesUrl },
      // { timestamp: dummyData.timeStampUrl },
      // { comment: dummyData.comments }
    );
  }

  render() {
    return (
      <div class="App">
        <SearchBar />
        <PostContainer />
      </div>
    );
  }
}

export default App;
