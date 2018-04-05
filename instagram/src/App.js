import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/searchBar';
import PostContainer from './components/PostContainer/postContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="header_left">
            <img className="instaIcon" src={require("./Images/instagram-logo-img.png")}/>
            <img className="instaTitle" src={require("./Images/instagram-logo-title.png")}/>
          </div>
          <SearchBar />
          <div className="header_right">
            <img className="icon icons_compass" src={require("./Images/compass.png")}/>
            <img className="icon icons_compass" src={require("./Images/heart.png")}/>
            <img className="icon icons_compass" src={require("./Images/user.png")}/>
          </div>
        </div>
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
