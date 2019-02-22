import React from 'react';

const LikeSection = props => {
    return (
        <div className='like-button-container'>
            <button className='like-button' onClick={props.incrementLike}>
                Like button
            </button>
            <div className='like-count'>
                {props.likes}
            </div>
        </div>
    );
}

export default LikeSection;