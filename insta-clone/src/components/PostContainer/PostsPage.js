import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostList from './PostList';

const PostsPage = (props) => {
  return (
    <div>
<header className="posts-page-header">
<div className="user-dashboard">
<h2>Welcome, {localStorage.username}!</h2>
<button
  onClick={() => {
    localStorage.clear();
    window.location.reload();
  }
}>Logout</button>
</div>
  <h1 className="title-headline">NOT Instagram</h1>
  <SearchBar
  searchPosts={props.searchPosts}
  handleChange={props.handleChange}/>

  </header>

  <PostList postData={props.postData}  />
    </div>
)};

export default PostsPage;
