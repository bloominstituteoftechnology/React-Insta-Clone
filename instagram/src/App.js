import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostWindow from './components/PostContainer/PostWindow';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
    }
  }

  componentDidMount() {
    this.setState({dummyData: dummyData})
  }

  render() {
    return (
      <PostWindow dummyData={this.state.dummyData} />
    );
  }
}

export default App;
