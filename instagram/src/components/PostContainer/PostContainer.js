import React, { Component } from 'react';
import './PostContainer.css';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';



const PostContainer = props => {
    
        return(
        <div className='post'  >
            <Post data={props.data} addLike={props.addNewLike} id={props.id}/>
            <CommentSection comments={props.data.comments} />
        </div>
    );
    
}

export default PostContainer;