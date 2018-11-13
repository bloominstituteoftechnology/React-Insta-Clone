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
      data: dummyData,
      commentText: dummyData.map(post => ({
        username: post.username,
        text: '',
        timestamp: post.timestamp,
      })),
    };
  }

  onCommentFormChange(e, u, t) {
    this.setState({
      commentText: this.state.commentText.map(text => {
        if (text.username === u && text.timestamp === t) {
          text.text = e.target.value;
        }
        return text;
      }),
    });
  }

  onCommentFormSubmit(e, u, t) {
    e.preventDefault();
    this.setState({
      data: this.state.data.map(post => {
        if (post.username === u && post.timestamp === t){
          post.comments.push({
            username: this.state.username,
            text: this.state.commentText.filter(text => (
              text.username === u && text.timestamp === t
            ))[0].text,
          });
        }
        return post;
      }),
      commentText: this.state.commentText.map(text => {
        if (text.username === u && text.timestamp === t) {
          text.text = '';
        }
        return text;
      }), 
    });
  }

  render() {
    // console.log(dummyData);
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
                    commentText={this.state.commentText[i]}
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
