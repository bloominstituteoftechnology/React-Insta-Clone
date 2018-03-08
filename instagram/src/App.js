import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import { PostContainer } from './components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = { Post: [] }
  }

  componentDidMount() {
    this.setState({Post: dummyData});
  }
  
  render() {
    return (
      <div className="App">
        <PostContainer dummyData={this.state.Post} />
      </div>
    );
  }
}

export default App;
