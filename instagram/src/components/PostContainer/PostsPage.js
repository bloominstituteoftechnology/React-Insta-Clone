import React from 'react';
import SearchBar from '../SearchBar/Search';
import PostContainer from './PostContainer';


const PostsPage = props => {
    return (
      <div className="propsPage">
        <header className="searchheader">
          <SearchBar  
          searchFunction={props.searchFunction} 
          logOut={props.logOut}
          searchTerm={props.searchTerm}/>
        </header>
        
        <PostContainer 
        likePost={props.likePost} 
        data={
          props.search.length > 0 ? props.search : props.data } />
      </div>
    );
  }

export default PostsPage;
