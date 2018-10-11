import React from 'react';

const PostHeader = (props) => {
    return(
        <div className="post-header">
            <div className="thumbnail">
                <img
                    alt="thumnail"
                    className="post-thumbnail"
                    src={props.thumbnail}
                />
            </div>
            <div>{props.username}</div>
        </div>
    );
}

export default PostHeader;