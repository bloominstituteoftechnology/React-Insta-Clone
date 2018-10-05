import React from 'react';

// PostHeader contains the user's icon and name

const PostHeader = (props) => {
    // Props taken in:
    // username:
    // thumbnailUrl:

    return (
        <div className='postHeader'>
            <div className='postHeaderImg'>
                <img className='thumbnail' src={props.thumbnailUrl} alt={props.username} />
            </div>
            <div className='postHeaderName'>{props.username}</div>
        </div>
    );
};

export default PostHeader;