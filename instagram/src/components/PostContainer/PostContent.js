import React from 'react';
import './Post.css';

const PostContent = (props) => {
    return (
        <div className='post-content-container'>
            <img src={props.picture} className='picture-content' />
            <div className='content-footer'>
                
            </div>
        </div>
    );
}

export default PostContent;