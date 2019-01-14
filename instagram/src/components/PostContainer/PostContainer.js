import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import '../../App.css'

const PostContainer = props =>{
    console.log(props.post.comments);
    return (
      <div className="post">
        
        <CommentSection comments={props.post.comments} /> 
    
      </div>
    );
}

export default PostContainer;
