import React from 'react';
import HeartIcon from './hearticon.png';
import CommentIcon from './commenticon.png';
import './LikesSection.css'

const LikesSection = props => {
    return (
        <div className='likes-section-wrapper'>

            <div className="icon-wrapper">
                <div className="likes-icon">
                    <img 
                        src={HeartIcon} 
                        alt="icon" 
                        onClick={props.incrementLikes}
                    />
                </div>
                <div className="comment-icon">
                    <img src={CommentIcon} alt="icon" />
                </div>
            </div>

                <div className="likes-counter">{props.likes} likes</div>
        </div> 

    )
}

export default LikesSection;