import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
    console.log('headerProps', props);
    return (
        <div className='post-header'>
            <div className='post-thumbnail'>
                <img 
                alt="thumbnail"
                src={props.thumbnailUrl} />
            </div>
            <div className='post-username'>
                {props.username}
            </div>
        </div>
    );
};

export default PostHeader;