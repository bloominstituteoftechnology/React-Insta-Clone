import React from 'react';
 
function PostLikesSection(props) {
    return (
        <div className="feedback-container">
            <div className="feedback-items">
                <div className="left-icons">
                    <i className="far fa-heart"
                    onClick={props.incrementLike}
                    />
                    <i className="far fa-comment" />
                    <i className="far fa-paper-plane" />
                </div>
                <div className="right-icons">
                    <i className="far fa-bookmark"/>
                </div>
            </div>
            <div className="like">
                <p>{props.likes} likes</p>
            </div>
        </div>
    );
};

 export default PostLikesSection;