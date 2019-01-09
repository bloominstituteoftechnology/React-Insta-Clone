import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

const PostsPage = (props) => {
  return (
    <div className="posts-page">
      <SearchBar 
        data={props.data} 
        onSearch={props.onSearch} 
        handleNewSearch={props.handleNewSearch} 
        searched={props.searched}
        onSignout={props.onSignout}/>
        
      <PostContainer
        data={props.data} 
        users={props.users}/>
    </div>
  )
}

export default PostsPage;