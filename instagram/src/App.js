import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor(){
    super();
    this.state = {
      post: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <header className = "app-header">
        <div className = "logo-div">
          <img
            className = "logo"
            src = {require("./images/instagram-logo.png")}
            alt ="logo"
          />
          <img
            className="logo-text"
            src= {require("./images/instagram-text.png")}
            alt="instagram"
          />
        </div>
        <SearchBar />
        <div className = "right-logo-div">
          <img
            className="explore-logo"
            src={require("./images/explore-logo.png")}
            alt = "explore logo" />
          <img
            className="heart-logo"
            src={require("./images/instagram-heart.png")}
            alt="explore logo" />
          <img
            className="explore-logo"
            src={require("./images/instagram-profile.png")}
            alt="explore logo" />
        </div>
        </header>
        {
          this.state.post.map(item => (
            <PostContainer key={Math.random()} post={item} />
            
          ))
        
        }
      </div>
    
    );
  }
}

export default App;
