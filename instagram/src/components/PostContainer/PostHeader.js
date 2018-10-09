import React from 'react';
import './post.css';


const PostHeader = (props) => {
    return (
        <div className = "postHeader-div">
            <div>
                <img className = "img-postHeader" src = {props.thumbnailUrl} alt = "post-header" />
            </div>

            <div>
                {props.username}
            </div>
        </div>
    )
}

export default PostHeader;