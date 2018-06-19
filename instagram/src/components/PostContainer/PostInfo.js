import React from 'react';

const PostInfo = props => {
    return(
        <div>
            <img src={props.postInfo.thumbnailUrl} alt='user'/>
            <span>
            {props.postInfo.username}
            </span>
            <img src={props.postInfo.imageUrl} alt='user image' />
            {props.postInfo.likes}
        </div>
    )
}

export default PostInfo;