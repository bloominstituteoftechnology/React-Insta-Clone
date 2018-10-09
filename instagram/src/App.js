import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

library.add(faComment, faHeart, faEllipsisH);

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        postData: dummyData
      });
    }, 800);
  }

  render() {
    return (
      <div className="appContainer">
        {!this.state.postData.length ? (
          <h1 className="loadingScreen">Loading...</h1>
        ) : (
          this.state.postData.map(postInfo => (
            <PostContainer postInfo={postInfo} key={postInfo.timestamp} />
          ))
        )}
      </div>
    );
  }
}

export default App;
