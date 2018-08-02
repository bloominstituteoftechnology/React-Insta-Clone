import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="post-container-wrap" >
            <div className="post-header-wrap" >
                <div className="post-thumb-wrap" >
                    <img src={props.post.thumbnailUrl} className="post-thumb" alt="" />
                </div>
                <div className="post-username">
                    {props.post.username}
                </div>
            </div>
            <div >
                <img src={props.post.imageUrl} alt="" />
            </div>
            <div className="comment-section-wrap" >
                <CommentSection comments={props.post.comments} likes={props.post.likes} />
            </div>
        </div>
    );
};

export default PostContainer;