import dummyData from "../../dummy-data";
import React, { Component } from 'react';
import './PostContainer.css';
function PostContainer (props){
    
    return (
        <div className= "comment-text">
            <h4>{props.comment.username}: </h4>
            <p>{props.comment.text}</p>
        </div>
    )      
    
}

export default PostContainer