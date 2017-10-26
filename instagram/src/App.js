import React, { Component } from 'react';
import './App.css';
import { PostContainer } from './PostContainer';
import { NavBar} from './NavBar';
import { postData } from './application-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({posts: postData});
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
