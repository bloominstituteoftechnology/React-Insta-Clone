import React from 'react';
import Fuse from 'fuse.js';

import PropTypes from 'prop-types';


import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostPage extends React.Component {
  render() {
    const options = {
      keys: ['username'],
    };
    const fuse = new Fuse(this.props.data, options);
    const filteredData = this.props.searchText === '' ? this.props.data : fuse.search(this.props.searchText);
    return (
      <div className="post-page">
        <SearchBar
          searchText={this.props.searchText}
          handleSearch={e => this.props.handleSearch(e)}
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
                    submitComment={(c, u, t) => this.props.submitComment(c, u, t)}
                    updateLikes={(u, t, n) => this.props.updateLikes(u, t, n)}
                    post={post}
                    handleRemoveComment={(u, t, i) => this.props.handleRemoveComment(u, t, i)}
                  />
            ))}
          </div>
        </div>
      </div>
  )}
}

PostPage.propTypes = {
  data: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired,
  updateLikes: PropTypes.func.isRequired,
  handleRemoveComment: PropTypes.func.isRequired,
}

export default PostPage