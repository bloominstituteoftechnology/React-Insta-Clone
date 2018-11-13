import React, { Component } from 'react';
import './App.css';

// import data
import dummyData from './dummy-data'

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'currentUser',
      // data: dummyData,
      data: [],
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData.map(post => {
        post.commentText = '';
        return post;
      }),
    })
  }

  onCommentFormChange(e, u, t) {
    this.setState({
      data: this.state.data.map(post => {
        if (post.username === u && post.timestamp === t) {
          post.commentText = e.target.value;
        }
        return post;
      })
    });
  }

  onCommentFormSubmit(e, u, t) {
    e.preventDefault();
    this.setState({
      data: this.state.data.map(post => {
        if (post.username === u && post.timestamp === t){
          post.comments.push({
            username: this.state.username,
            text: post.commentText,
          });
          post.commentText = '';
        }
        return post;
      }), 
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="posts--container">
          <div className="posts">
            {
              this.state.data.map(
                (post, i) => (
                  <PostContainer
                    key={post.username + post.timestamp}
                    commentText={post.commentText}
                    onCommentFormChange={(e, u, t) => this.onCommentFormChange(e, u, t)}
                    onCommentFormSubmit={(e, u, t) => this.onCommentFormSubmit(e, u, t)}
                    post={post}
                  />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
