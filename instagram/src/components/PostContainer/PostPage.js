import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';


const PostPage = props => {
  return (
    <div>
      <SearchBar search={props.search} logout={props.logout}/>
      <PostContainer posts={props.posts}/>
    </div>
  );
};

export default PostPage;
