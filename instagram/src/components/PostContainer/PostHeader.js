import React from 'react';

const PostHeader = props => {
    return (
        <div>
            <div>
                <img src={props.thumbnailUrl} />
            </div>
            <p>{props.username}</p>
        </div>
    );
}

export default PostHeader;