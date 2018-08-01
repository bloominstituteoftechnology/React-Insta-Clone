import React from 'react';
import PostContainer from './PostContainer.js';
import SearchBar from '../SearchBar/SearchBar.js';

const PostsPage = (props) => {

  return (
      <div>
        <SearchBar searchItem={props.searchItemHandler} searchValue={props.searchInfo} searchSubmit={props.searchSubmitHandler}/>
        {props.posts.map(item => <PostContainer post={item} comments={item.comments} key={item.timestamp} /> )}
      </div>
  )
}

export default PostsPage;
