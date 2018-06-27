import React from 'react';
import './post-container.css';

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