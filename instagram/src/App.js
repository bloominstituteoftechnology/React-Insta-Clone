import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor() {
    super();
    this.state={
      posts:[]
    };
  }

  componentDidMount() {
    this.setState({posts: dummyData});
  }

  render() {
    return (
      <div className="app-container">
        <PostContainer data={this.state.posts}/>
      
      </div>
    )
  }
}

export default App;
