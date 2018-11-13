import React from 'react';
import HeartIcon from './hearticon.png';
import CommentIcon from './commenticon.png';

const LikesSection = props => {
    return (
        <div className="likes-section-wrapper">
            <div className="likes-icon">
                <img src={HeartIcon} alt="icon" />
            </div>
            <div className="comment-icon">
                <img src={CommentIcon} alt="icon" />
            </div>
            <div>{props.likes} likes</div>
        </div>

    )
}

export default LikesSection;