import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({data: dummyData});
  }

  render() {
    return <PostsPage data={this.state.data} />;
  }
}

export default App;
