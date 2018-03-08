import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Posts: [], 
    };
  }

  componentDidMount() {
    this.setState({
      Posts: dummyData,
    })
  }

  render() {
    this.state.Posts.forEach(post => console.log(post));
    return (
      <div className="container">
        <PostContainer />
      </div>
    );
  }
}

export default App;
