import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummydata from './dummy-data';
import post from './components/PostContainer/post.js';
import postcss from './components/PostContainer/post.css';
import search from './components/SearchBar/search';
import comment from './components/CommentSection/comment'
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    const { data } = dummydata;
    this.setState({ dummyData: data });
  }
  render() {
    return (
      <div>
      {dummyData.map(dummyData => {
        return (
          <div id="post">
          <div id="pp">
          <img className="imgUrl" src={dummydata.thumbnailUrl} width="600" alt="propic"/>
          </div>
          <p>{dummyData.username}</p>
          <img className="imgUrl" src={dummydata.imageUrl} width="600" alt="postimg"/>
            <p>{dummyData.likes}</p>
            <div>{dummyData.comments.username}{dummyData.comments.text}</div>
          </div>
        );
      })}
    </div>
    );
  }
}

export default App;