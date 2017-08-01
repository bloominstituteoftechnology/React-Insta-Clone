import React, { Component } from 'react';
import { PostContainer } from './components/PostContainer';
import postData from './application-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
    };
  }

  componentDidMount() {
    this.setState({
      postData: postData,
    });
  }



  render() {
    return (
      <div className="App">
        <div className="Nav-bar">
        </div>
        <div className="Post-container">
          <PostContainer postData={this.state.postData} />
        </div>
      </div>
    );
  }
}

export default App;
