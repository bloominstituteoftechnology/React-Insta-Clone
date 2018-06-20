import React, { Component } from 'react';
import SearchBar from '../SearchBar/Search';
import PostContainer from './PostContainer';


const PostsPage = props => {
    return (
      <div className="propsPage">
        <header className="searchheader">
          <SearchBar  handleChange={props.handleChange} searchFunction={props.searchFunction} search={props.search}/>
        </header>
        
        <PostContainer data={props.data} comment={props.comment} handleComment={props.handleComment} addComment={props.addNewComment} likePost={props.likePost} />
      </div>
    );
  }

export default PostsPage;
