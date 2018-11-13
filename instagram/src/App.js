import React, { Component } from 'react';
import './App.css';
import Fuse from 'fuse.js';

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
      searchText: '',
    };
  }

  componentDidMount() {
    if (localStorage.getItem('instaClone')) {
      this.setState({
        data: JSON.parse(localStorage.getItem('instaClone')).map(
          post => {
            post.commentText = '';
            return post;
          }
        )
      })
    } else {
      this.setState({
        data: dummyData.map(post => {
          post.commentText = '';
          return post;
        }),
      })
    }
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

    localStorage.setItem('instaClone', JSON.stringify(
      this.state.data
    ));
  }

  handleSearch(e) {
    this.setState({
      searchText: e.target.value,
    })
  }

  updateLikes(u, t, n) {
    this.setState({
      data: this.state.data.map( post => {
        if (post.username === u && post.timestamp === t) {
          post.likes = n;
        }
        return post;
      })
    });

    localStorage.setItem('instaClone', JSON.stringify(
      this.state.data
    ));
  }

  handleRemoveComment(u, t, i) {
    this.setState({
      data: this.state.data.map( post => {
        if (post.username === u && post.timestamp === t) {
          post.comments = post.comments.filter((comment,id) => id !== i);
        }
        return post;
      })
    });

    localStorage.setItem('instaClone', JSON.stringify(
      this.state.data
    ));
  }

  render() {
    const options = {
      keys: ['username'],
    };
    const fuse = new Fuse(this.state.data, options);
    const filteredData = this.state.searchText === '' ? this.state.data : fuse.search(this.state.searchText);
    return (
      <div className="App">
        <SearchBar
          searchText={this.state.searchText}
          handleSearch={(e) => this.handleSearch(e)}
        />
        <div className="posts--container">
          <div className="posts">
            {
              filteredData
              .map(
                (post, i) => (
                  <PostContainer
                    key={post.username + post.timestamp}
                    commentText={post.commentText}
                    onCommentFormChange={(e, u, t) => this.onCommentFormChange(e, u, t)}
                    onCommentFormSubmit={(e, u, t) => this.onCommentFormSubmit(e, u, t)}
                    updateLikes={(u, t, n) => this.updateLikes(u, t, n)}
                    post={post}
                    handleRemoveComment={(u, t, i) => this.handleRemoveComment(u, t, i)}
                  />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;