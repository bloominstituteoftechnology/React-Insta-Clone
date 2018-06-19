import React from 'react';
import CommentSection from '../../components/CommentSection/CommentSection';

const PostsContainer = props => {
    return (
        <div className="post-container">
            <div className="header">
                <div className="post-thumb-wrapper">
                    <img
                        src={props.thumbnailUrl}
                        className="post-thumb"
                        alt="post-header"
                    />
                </div>
                <div>{props.username}</div>
            </div>
            <div className="image-wrapper">
                <img
                    src={props.imageUrl}
                    className="post-image"
                    alt="post image"
                />
            </div>
            <div className="comment-section">
                <CommentSection comments={props.comments}/>
            </div>
        </div>
        
    )
};


export default PostsContainer