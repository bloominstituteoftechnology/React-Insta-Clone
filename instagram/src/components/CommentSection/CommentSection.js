import PostContainer from "../PostContainer/PostContainer";
import React, { Component } from 'react';
import PropTypes from "prop-types"
import './CommentSection.css';

CommentSection.propTypes = {
    username: PropTypes.string,
    likes: PropTypes.number,
    
}

function CommentSection (props) {     
    
    return (
        <section className="comment-section">
            <header>
                <div>
                    <img src = {props.data.thumbnailUrl}/>
                </div>
                <div>
                    <h4>{props.data.username}:</h4>
                </div>
                
                
            </header>
            <img src={props.data.imageUrl}/>
            <p className= 'likes'>{props.data.likes + ' likes'}</p>

            <div>
                {props.data.comments.map(comment => <PostContainer comment = {comment}/>)}                
                <input value = {props.value} onChange = {props.handleCommentInput}/>
                <button onClick = {props.addComment} id={props.data.id}>Add Comment</button>
                <button onClick = {props.likePost} id={props.data.id}>Like Post</button>
            </div>

            {/* <div>
                <input onChange = {props.handleInput}/>    
                <button onClick = {props.addComment} type = 'button'>Sumbit Comment</button>
            </div>     */}
        </section>
    )
}
    
export default CommentSection;