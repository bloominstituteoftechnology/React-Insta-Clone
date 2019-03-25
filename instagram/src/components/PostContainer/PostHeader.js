import React from 'react';
import './Post.css';

const PostHeader = props => {
    return(
        <div className = 'postHeader'>
            <div className = 'userThumbnail'>
                <img src = {props.dummy.thumbnailUrl} alt = 'user thumbnail'/>
            </div>
            <div>
                {props.dummy.username}
            </div>
        </div>
    )
}

export default PostHeader;