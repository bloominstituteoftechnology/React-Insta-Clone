import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostList from './PostList';

const PostsPage = (props) => {
  return (
    <div>
<header className="posts-page-header">
  <h1>NOT Instagram</h1>
  <SearchBar
  searchPosts={props.searchPosts}
  handleChange={props.handleChange}/>
  </header>

  <PostList postData={props.postData}  />
    </div>
)};

export default PostsPage;
