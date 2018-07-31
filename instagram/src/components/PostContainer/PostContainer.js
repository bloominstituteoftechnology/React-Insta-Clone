import React, { Component } from 'react';
import './PostContainer.css';
import PostBody from './PostBody'

const PostContainer = props => {
  return(
    <div className = 'container'>
        {props.posts.map(a => <PostBody key={a.imageUrl} post={a} />)}
      </div>
  )

  }
export default PostContainer
