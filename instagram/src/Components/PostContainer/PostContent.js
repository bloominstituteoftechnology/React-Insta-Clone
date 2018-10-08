import React from 'react';

const PostContent = ({url}) => {
    return (
        <div className="post-content">
            <img src={url} alt="post-content" />
        </div>
    );
}

export default PostContent;
