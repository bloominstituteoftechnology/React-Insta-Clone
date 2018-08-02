import React from 'react';

const PostLikesSection = props => {
    return (
        <div className="post-feedback-container">
        <div className="feedback-items">
            <div className="right-feedback">
                <i className="far fa-heart" 
                onClick={props.incrementLike}
                />
                <i className="far fa-comment" />
                <i class="far fa-paper-plane" />
            </div>
            <div className="left-feedback">
                <i className="far fa-bookmark" />
            </div>
        </div>
        <div className="like-amout">
            <p>{props.likes} likes</p>
        </div>
        </div>
    );
};

export default PostLikesSection;