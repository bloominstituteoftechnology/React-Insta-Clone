import React from 'react';
import Fuse from 'fuse.js';

import dummyData from '../../dummy-data';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'currentUser',
      data: [],
      searchText: '',
    };
  }

  componentDidMount() {
    let data = localStorage.getItem('instaClone');
    data = data ? JSON.parse(data) : dummyData;

    let user = localStorage.getItem('instaCloneLogin');
    user = user ? (JSON.parse(user)).username : 'newUser';

    this.setState({
      data: data,
      username: user,
    });
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
    this.setState(prevState => ({
      data: prevState.data.map(post => {
        if (post.username === u && post.timestamp === t){
          return {
            ...post,
            comments: [...(post.comments), {
              username: prevState.username, 
              text: c}],
          }
        }
        return post;
      }), 
    }));
  }

  updateLikes(u, t, n) {
    this.setState(prevState => ({
      data: prevState.data.map( post => {
        if (post.username === u && post.timestamp === t) {
          post.likes = n;
        }
        return post;
      })
    }));
  }

  handleRemoveComment(u, t, i) {
    this.setState(prevState => ({
      data: prevState.data.map( post => {
        if (post.username === u && post.timestamp === t) {
          return {...post, comments: post.comments.filter((comment, id) => id !== i)}
        }
        return post;
      })
    }));
  }

  setUsername(name){
    this.setState({
      username: name,
    })
  }

  render() {
    const options = {
      keys: ['username'],
    };
    const fuse = new Fuse(this.state.data, options);
    const filteredData = this.state.searchText === '' ? this.state.data : fuse.search(this.state.searchText);
    return (
      <div className="post-page">
        <SearchBar
          searchText={this.state.searchText}
          handleSearch={e => this.handleSearch(e)}
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
  )}
}

export default PostPage;
// export default PostPage;