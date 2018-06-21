import React from 'react';
import SearchBar from '../SearchBar/Search';
import PostContainer from './PostContainer';


const PostsPage = props => {
    return (
      <div className="propsPage">
        <header className="searchheader">
          <SearchBar  handleChange={props.handleChange} searchFunction={props.searchFunction} search={props.search} logOut={props.logOut}/>
        </header>
        
        <PostContainer data={props.data} handleComment={props.handleComment} addComment={props.addComment} comment={props.comment} likePost={props.likePost} />
      </div>
    );
  }

export default PostsPage;
