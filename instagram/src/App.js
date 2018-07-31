import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from "./dummy-data";


// Outline:

//App
    //Main Header
        //Page Title
        //Search Bar
        //Header Icons
    //Post Container
        //Header
            //Avatar
            //Post Title
        //Image
        //Comment Section
            //Post Icons
            //Loaded Comments
            //Add Comment

const Post = props => {
  return (
    <div className = "post-container">
      <div className = "post">
        <h3> {props.post.username} </h3>
      </div>
    </div>
  )
}

const Posts = props => {
  return (
    <div className = "posts">
    {props.posts.map(post => <Post key = {post.username} post = {post} />)}
    </div>
  )
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount(){
    this.setState({posts: dummyData});
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className = "Posts">
        <Posts posts = {this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
