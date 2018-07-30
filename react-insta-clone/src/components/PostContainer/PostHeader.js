import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
    console.log('headerProps', props);
    return (
        <div>
            <div className='postThumbnail'>
                <img src={props.thumbnailUrl} />
            </div>
            <div>
                {props.username}
            </div>
        </div>
    );
};

export default PostHeader;