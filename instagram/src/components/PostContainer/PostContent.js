import React from 'react';
import './PostContainer.css';

const PostContent = props => {
    return (
        <div className='content'>
            <img className='image' src={props.image} />
            <p className='likes'>{props.likes} likes </p>

        </div>
    )
}


export default PostContent;