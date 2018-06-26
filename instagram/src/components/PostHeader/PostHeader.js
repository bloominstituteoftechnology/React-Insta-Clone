import React from 'react';

const PostHeader= props => {
    return(
        <div>
            <img
                alt="header"
                className="header-post"
                src={props.thumbnailUrl}
            />
            {props.username}
        </div>
    );
}

export default PostHeader;