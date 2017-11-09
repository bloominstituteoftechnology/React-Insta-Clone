import React, { Component } from 'react';
import './App.css';
import { postData } from './application-data';
import PostContainer from './PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
    };
  }

  componentDidMount() {
    this.setState({ postData });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Instagraham</h1>
        </header>
        <PostContainer
          posts={this.state.postData}
        />
      </div>
    );
  }
}

export default App;
