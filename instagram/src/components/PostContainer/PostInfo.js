import React from 'react';

const PostInfo = props => {
    return(
        <div>
            <img src={props.post.thumbnailUrl} alt='user'/>
            <span>
            {props.post.username}
            </span>
            <img src={props.post.imageUrl} alt='user image' />
            {props.post.likes}
        </div>
    )
}

export default PostInfo;