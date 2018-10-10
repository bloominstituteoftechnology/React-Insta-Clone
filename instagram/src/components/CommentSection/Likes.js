import React from 'react';
import Heart from '../../img/heart.svg';
import Bubble from '../../img/message-circle.svg';

const Likes = props => {
    return (
        <div className="post-likes">
            <img src={Heart} onClick={props.likeClicked} alt="heart" />
            <img src={Bubble} alt="speech bubble" />
            <h4>{props.likes} likes</h4>
        </div>

    );
}

export default Likes;