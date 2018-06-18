import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
    return (
        <div className='header'>
           
        <img className='thumbnail' src={props.thumbnail} />
        {props.user}
        </div>
    )
}

export default PostHeader;