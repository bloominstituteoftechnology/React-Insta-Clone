import React from 'react';

const Likes = props => {
    return (
        <div className = "likes-wrapper">
            <div>{props.likes}</div>
        </div>
    )

}

export default Likes