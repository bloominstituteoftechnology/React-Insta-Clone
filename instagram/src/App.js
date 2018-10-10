import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

import dummyData from './dummy-data';

class App extends Component {

  state = {
    posts: [],
    user: 'edub',
  }

  addNewComment = comment => {
    let posts = [...this.state.posts];
    posts[comment.key].comments.push({username: this.state.user, text: comment.text });
    this.setState({ posts: posts});
  }

  addLike = key => {
    let posts = [...this.state.posts];
    console.log(key);
    posts[key].likes++;
    this.setState({ posts: posts});
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ posts: dummyData });
    }, 500);
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="posts">
          {this.state.posts.map((post, index) => (
            <PostContainer 
              postKey={index} 
              post={post} 
              addNewComment={this.addNewComment} 
              addLike={this.addLike}
             />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
