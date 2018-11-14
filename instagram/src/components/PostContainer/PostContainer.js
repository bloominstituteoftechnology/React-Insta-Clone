import React, { Component } from 'react';
import './PostContainer.css';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';



const PostContainer = props => {

    
        return(
        <div className='post' id={props.id} >
            <Post data={props.data} addLike={props.addNewLike}/>
            <CommentSection comments={props.data.comments}/>
        </div>
    );
    
    
}

export default PostContainer;