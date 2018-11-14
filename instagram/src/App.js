import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import * as Icon from 'react-feather';
class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      post: [],
    };
  }
  handleLikes = timestamp => {
    let posts = this.state.post.slice();
    posts = posts.map(post =>
      {
        if (post.timestamp === timestamp){
          post.likes = post.likes + 1;
        }
      }
      )
    this.setState({posts});
  }
  componentDidMount(){
    this.setState({
      post: dummyData,
    })
  }
  render() {
    return (
      <div className="App"> 
        <header className="App-header">
          <div className="App-header__logo">
            <Icon.Instagram className="logo"/>
          </div>
          <div>
            <img
              className="logo__text"
              src={require("./images/logo-instagram.png")}
              alt="instagram logo"
            />
          </div>

          <SearchBar className="search-bar" />
          <a href="#" className="link"><Icon.Compass className="link-compass"/></a>
          <a href="#" className="link"><Icon.Heart className="link-heart"/></a>
          <a href="#" className="link"><Icon.User className="link-user"/></a>
          
        </header>
        {this.state.post.map(post => (
          <PostContainer key={post.timestamp} post={post} handlelikesprop={this.handleLikes}/>
        ))}
      </div>
    );
  }
}

export default App;
