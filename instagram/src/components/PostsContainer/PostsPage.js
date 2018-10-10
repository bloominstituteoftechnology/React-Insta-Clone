import React from 'react';
import PostsContainer from './PostsContainer';



const PostsPage = props => {
  return (
    <div className="postsPage">
    <PostsContainer
    posts={
    this.state.filteredPosts.length > 0
    ? this.state.filteredPosts
    : this.state.posts
    }
    />
    </div>
  );
};





export default PostsPage;