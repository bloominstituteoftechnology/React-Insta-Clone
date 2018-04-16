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
            <img className="instaIcon" src={require("./Images/instagram-logo-img.png")} alt="Instagram camera logo"/>
            <img className="instaTitle" src={require("./Images/instagram-logo-title.png")} alt="Instagram logo title"/>
          </div>
          <SearchBar />
          <div className="header_right">
            <img className="icon" src={require("./Images/compass.png")} alt="Compass icon"/>
            <img className="icon" src={require("./Images/heart.png")} alt="Heart icon"/>
            <img className="icon" src={require("./Images/user.png")} alt="User icon"/>
          </div>
        </div>
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
