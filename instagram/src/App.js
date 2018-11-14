import React, { Component } from 'react';
import Fuse from 'fuse.js';

// styles
import './App.css';

// data
import dummyData from './dummy-data'

// components
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'currentUser',
      data: [],
      searchText: '',
    };
  }

  componentDidMount() {
    if (localStorage.getItem('instaClone')) {
      this.setState({
        data: JSON.parse(localStorage.getItem('instaClone')),
      })
    } else {
      this.setState({
        data: dummyData,
      })
    }
  }

  componentDidUpdate(prevState) {
    if(prevState.data !== this.state.data) {
      localStorage.setItem('instaClone',JSON.stringify(this.state.data));
    }
  }

  handleSearch(e) {
    this.setState({
      searchText: e.target.value,
    })
  }

  submitComment(c, u, t) {
    this.setState({
      data: this.state.data.map(post => {
        if (post.username === u && post.timestamp === t){
          return {
            ...post,
            comments: [...(post.comments), {
              username: this.state.username, 
              text: c}],
          }
        }
        return post;
      }), 
    });
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
  }

  handleRemoveComment(u, t, i) {
    this.setState({
      data: this.state.data.map( post => {
        if (post.username === u && post.timestamp === t) {
          return {...post, comments: post.comments.filter((comment, id) => id !== i)}
        }
        return post;
      })
    });
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
                    submitComment={(c, u, t) => this.submitComment(c, u, t)}
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