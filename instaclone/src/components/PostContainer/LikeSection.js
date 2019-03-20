import React from 'react';
import heart from '../../assets/heart.png';
import redheart from '../../assets/redheart.png';
import comment from '../../assets/comment.png';

const LikeSection = props => {
    return(
        <div className="like-section" onClick={props.incrementLike}>
        <div>
        <img src={heart} />
        <img src={comment} />
        </div>
        <div>
            <p><strong>{props.likes}</strong> likes</p>
        </div>
        </div>
    )
}

export default LikeSection;