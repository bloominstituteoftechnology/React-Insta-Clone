import React, { Component } from 'react';
import { PostContainer } from './components/PostContainer';
import postData from './application-data';
import LikeButton from './components/LikeButton';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      comments: []
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
        <div>
          <NavBar />
        </div>
        <div className="Post-Container">
          <PostContainer postData={this.state.postData} />
        </div>
      </div>
    );
  }
}

export default App;
