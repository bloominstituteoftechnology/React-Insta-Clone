import React from 'react';

const PostHeader = (props) => {
    return (
            <div className='comment-header'>
                <img src={props.thumbnailUrl} alt='thumbnail' className='thumbnail' />
                <h4>{props.username}</h4>
            </div>
        
    );
}

export default PostHeader