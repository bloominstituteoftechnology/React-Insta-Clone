import React, { Component } from 'react';
import './App.css';
import { dummyData } from './dummy-data';
import { PostContainer } from './Components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      DummyData: [],
    };
  }

  componentDidMount() {
    this.setState({DummyData: dummyData}); // pull list objects from dummyData file
  }

  render() {
    return (
      <div className="App">
        <h1>Instagram</h1>
        <PostContainer dummyData={this.state.DummyData}/>
      </div>
    );
  }
}

export default App;
