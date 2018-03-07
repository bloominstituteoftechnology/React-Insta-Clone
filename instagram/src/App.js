import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import { PostContainer } from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({ dummyData });
  }

  render() {
    return (
      <div className="App">
        {this.state.dummyData.map((post, index) => {
          return (
            <div key={index}>
              <PostContainer insta={this.state.dummyData.post} />;
            </div>
          );
        })};
      </div>
    );
  }
}

export default App;
