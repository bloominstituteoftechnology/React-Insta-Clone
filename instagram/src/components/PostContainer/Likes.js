import React from 'react';

const Likes = (props) => {
    return (
        <div onClick={props.incrementCount} comment>
        <div>
            {props.likes} likes
        </div>
        </div>
    )
}
export default Likes