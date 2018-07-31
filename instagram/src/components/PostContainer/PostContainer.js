import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="post-container-wrap" >
            <div className="post-header-wrap" >
                <div className="post-thumb-wrap" >
                    <img src={props.post.thumbnailUrl} className="post-thumb" />
                </div>
                <div className="post-username">
                    {props.post.username}
                </div>
            </div>
            <div >
                <img src={props.post.imageUrl} alt="${props.post.username} image" />
            </div>
            <div className="comment-section-wrap" >
                <span className="comments-social" >
                    <i className="far fa-heart fa-lg" />
                </span>
                <span>
                    <i className="far fa-comment fa-lg" />
                </span>
                <div className="comments-social" >
                    {props.post.likes} likes
                </div>
                <div>
                    <CommentSection comments={props.post.comments}  />
                </div>
            </div>
        </div>
    );
};

export default PostContainer;