import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostPage = props => {
    console.log('imThis', this);
    return (
        <div className="post-page">
        <SearchBar
          searchTerm={props.searchTerm}
          searchPosts={this.searchPostHandler}
        />
        <PostContainer 
          posts={
          props.filteredPosts.length > 0 
          ? props.filteredPosts 
          : props.posts
          }
           /> 
    </div>
    );
};

export default PostPage;