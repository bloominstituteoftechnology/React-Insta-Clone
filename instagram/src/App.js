import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({posts: dummyData});
  }
  
  render() {
    return (
      <div callsName="Page">
        <h1 className="Header">Instagram</h1>
        {this.state.posts.map((post,i) => {
          return <PostContainer post={post} key={i} />
        })}  
      </div> 
    );
  }
}

export default App;
