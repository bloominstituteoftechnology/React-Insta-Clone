import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

const PostsPage = (props) => {
  return (
    <>
      <SearchBar data={props.data} onSearch={props.onSearch} handleNewSearch={props.handleNewSearch} searched={props.searched}/>
      <PostContainer data={props.data} users={props.users}/>
    </>
  )
}

export default PostsPage;