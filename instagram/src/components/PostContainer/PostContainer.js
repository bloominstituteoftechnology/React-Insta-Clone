import React, { Component } from 'react';
import CommentContainer from '../CommentSection/CommentContainer';
import Post from './Post';
import './Posts.css';


const PostContainer = props => {
  return(
    <div className='p-container'>
      {props.data.map(postM =>
        <Post
          key={postM.imageUrl}
          post={postM}
        />
      )}
    </div>
  )
}



export default PostContainer;
