import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: this.dummyData,
      currentCard: null,
      nextCard: null,
      prevCard: null
    };
  
  }

  componentDidMount() {
    this.getDummyData();
  }

  getDummyData() {
    dummyData.map(dummyData => ({
      username: `${dummyData.username}`,
      email: `${dummyData.email}`,
      thumbnailUrl: `${dummyData.thumbnailUrl}`,
      imageUrl: `${dummyData.imageUrl}`,
      likes: `${dummyData.likes}`,
      timestamp: `${dummyData.timestamp}`,
      commentUserName: `${dummyData.comments.username},`,
      commentText: `${dummyData.comments.text},`
    }))
    this.setState({
      dummyData })

      console.log("here is the dummy: " + dummyData)
  }
  
    
  
  render() {
    return (
      <div className="App">
        <div className="searchBar"><SearchBar /></div>
        <div className="postContainer">PostContainer<PostContainer /></div>
               
      </div>
    );
  }
}

export default App;
