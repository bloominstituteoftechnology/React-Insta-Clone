import React from "react";
import CommentSection from "../CommentComponents/CommentSection";
import styled from 'styled-components';

const Post = props => {
    return (
        <div className="post-card">
            <div className="card-header">
            <img className="user-thumbnail" src={props.newPost.thumbnailUrl} alt="thumbnail"/>
            <p><b>{props.newPost.username}</b></p>
            </div>

            <img className="user-post" src={props.newPost.imageUrl} alt="post" />

            <div className="card-info">
            <i className="far fa-heart" onClick={() => props.increment(props.newPost.imageUrl)}></i>
            <i className="far fa-comment"></i>
            <p><b>{props.newPost.likes} likes</b></p>
            <CommentSection
            comments={props.newPost.comments}
            timestamp={props.newPost.timestamp}
             />
             </div>
        </div>
      )
}

export default Post;