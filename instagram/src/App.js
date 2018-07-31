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


const MainHeader = props => {
  return (
    <div className = "main-header"> 
      <div className = "left-icons">
        <div className="fab fa-instagram"></div>
        <div class="vl"></div>
        <div className = "instagram">
          <h2> Instagram</h2>
        </div>
      </div>

       <div className = "search-field">
      <input type = "search" placeholder = "search"/>
      </div>
    
      <div className = "right-icons">
        <div className = "icons"> 
          <i className="fa fa-compass" />
        </div>
        <div className = "icons"> 
          <i className="fa fa-heart" />
        </div>
        <div className = "icons"> 
          <i className="fa fa-user-circle" />
        </div>
      </div>
    </div> 

  )
}

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
    <div className = "all-posts">
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
        <MainHeader />
        <div className = "Posts">
        <Posts posts = {this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
