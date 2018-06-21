import React, { Component } from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import styled from 'styled-components'

const AppContainer = styled.div`
  max-width: 603px;
  margin: 0 auto;
`

const PostsPage = props => {
  return (
    <div>
      <SearchBar searchHandler={props.searchHandler}/>
      <AppContainer>
        {props.stateData.map( (postObj,postIndex) => <PostContainer key={postObj.timestamp} postObj={postObj} postIndex={postIndex} addNewComment={props.addNewCommentHandler} updateLikes={props.updateLikesHandler}/>)}
      </AppContainer>
    </div>
  );
}

export default PostsPage;
