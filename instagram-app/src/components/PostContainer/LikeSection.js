import React from 'react';

export default function LikeSection(props) {
    return (
        <div
          className='like-section'
          onClick={props.incrementLikes}
        >
             <div className="like-section-wrapper">{props.likes} likes</div>
        </div>
    )
}