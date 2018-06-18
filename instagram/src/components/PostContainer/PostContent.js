import React from 'react';
import './PostContainer.css';

const PostContent = props => {
    return (
        <div className='content'>
            <img className='image' src={props.image} />
            {props.likes}

        </div>
    )
}


export default PostContent;