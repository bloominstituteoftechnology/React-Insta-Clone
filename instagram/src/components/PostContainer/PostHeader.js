import React from 'react';


const PostHeader = props => {
    return (
        <div className='post-header-container'>
            <div className='post-header-thumbnail'>
                <img src={props.thumbnailUrl} />
            </div>
            <p>{props.username}</p>
        </div>
    );
}

export default PostHeader;