import React from 'react';
import CommentSection from './CommentSection';
// import SearchBar from './SearchBar';

const PostContainer = props => {
    return (
    //tell what to display here pass props.passPost from App.js
       
        <div className="postContainer">  
        <strong>{props.passPost.username}</strong>
        <img className="thumb"src={props.passPost.thumbnailUrl} alt="user avatar"/>
        <img className="main-img"src={props.passPost.imageUrl} alt="main img"/>
        <CommentSection 
        passComment={props.passPost.comments} 
        updatePost={(event, commentText) => props.updatePost(event, commentText, props.passPost.id)}
        />
    {/* set props.passPost.comments to var passComments*/}
        <p className="timestamp"></p>
        </div>
        
    )}

export default PostContainer;