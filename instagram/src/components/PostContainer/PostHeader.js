import React from 'react';
import './PostContainer.css'

const PostHeader = (props) => { 
    return(
        <div className="post-header">
            <div className="thumbnail">
                <img
                    alt="thumnail"
                    src={props.thumbnail}
                />
            </div>
            <p>{props.username}</p>
        </div>
    );
}

export default PostHeader;