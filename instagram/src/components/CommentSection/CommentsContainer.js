import React from 'react';
import Comments from './Comments'
import HeartIcon from '../../assets/HeartIcon.png'
import CommentIcon from '../../assets/CommentIcon.png'
import ShareIcon from '../../assets/ShareIcon.png'

const CommentsContainer = () => {
    return (
        <div className="comments_container">
            <div className="icons_container">
                <img
                alt="like icon"
                src={HeartIcon} 
                />
                <img
                className="comment-icon"
                alt="comment icon"
                src={CommentIcon}
                />
                <img
                className="share-icon"
                alt="share icon"
                src={ShareIcon}
                />
            </div>    
           <Comments />
        </div>
    );
};

export default CommentsContainer;
