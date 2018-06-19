import React from 'react';

const PostInfo = props => {
    return(
        <div>
            <div className="post-header">
            <img className="user-avatar" src={props.postInfo.thumbnailUrl} alt='user'/>
            
            <span>
            {props.postInfo.username}
            </span>
            </div>
            <img src={props.postInfo.imageUrl} alt='user image' />
            {props.postInfo.likes}
        </div>
    )
}

export default PostInfo;