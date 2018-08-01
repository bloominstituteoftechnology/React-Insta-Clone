import React from 'react';

import SearchBar from './../SearchComponents/SearchBar';
import PostContainer from './PostContainer';

const PostsPage = props => {
  return(
    <div className="app-container">
      <SearchBar filter={this.handleFilter} />
      {props.filteredPosts === undefined ?
        props.posts.map(post => <PostContainer post={post} />) :
        props.filteredPosts.map(post => <PostContainer post={post} />)}
    </div>
  )
}

export default PostsPage;
