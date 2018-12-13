import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props =>{
    return(
        <div className="container">
            <div className="post-header">
                <div className="user-icon">
                    <img className="profile-pic" src={props.data.thumbnailUrl} alt="logo"/>
                </div>
                <div className="user-name">
                    {props.data.username}
                </div>
            </div>
            <div className="main-image">
                <img src={props.data.imageUrl} alt="post"/>
            </div>
            <div className="post-icons">
                <div class="heart"></div>
                <div class="chat"></div>
            </div>
            <div className="likes">
                <div className="likes-container">
                    {props.data.likes} likes
                </div>
            </div>
            <div class="comments">
                <div class="comments-container">
                    {props.data.comments.map((comment,i) => <CommentSection key={i} data={comment}/>)}
                </div>
            </div>
        </div>
    )
}

export default PostContainer;