import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import PostContainer from './PostContainer.js';

const PostsPage = props => {
  return (
    <React.Fragment>
      <SearchBar 
        handleOnChange={props.handleOnChange}
        inputText={props.inputText}/>

      <PostContainer 
        searchItem={props.searchItem}
        posts={props.posts}
        user={props.user}/>
    </React.Fragment>
  );
};

export default PostsPage;