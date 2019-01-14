import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import '../../App.css'

const PostContainer = props =>{
    console.log(props.post.imageUrl);
    return (
      <div className="post">
        <div className="post-header">
            <img src={props.post.thumbnailUrl}/>
            <p>{props.post.username}</p>
        </div>
        <div className="post-img">
            <img src={props.post.imageUrl} alt=""/>
        </div>
            <CommentSection comments={props.post.comments} /> 
      </div>
    );
}

export default PostContainer;
