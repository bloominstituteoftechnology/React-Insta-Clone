import React, { Component } from 'react';
import './PostPage.css';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

const PostsPage = props => {
  return (
    <div>
      <SearchBar searchHandler={props.searchHandler}/>
      <div className="app-container">
        {props.stateData.map( (postObj,postIndex) => <PostContainer key={postObj.timestamp} postObj={postObj} postIndex={postIndex} addNewComment={props.addNewCommentHandler} updateLikes={props.updateLikesHandler}/>)}
      </div>
    </div>
  );
}

export default PostsPage;
