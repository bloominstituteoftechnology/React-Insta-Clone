import React, { Component } from 'react';

const PostHeader = props => {
    return (
        <div className='top-of-card'>
            <img className='thumbnail' src={props.thumbnailUrl} />
            <div className='top-of-card-username'>
                {props.username}
            </div>
        </div>
    )
}


export default PostHeader