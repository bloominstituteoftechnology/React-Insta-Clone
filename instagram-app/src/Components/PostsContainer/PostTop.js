import React from 'react';

const PostTop = props => {
    return (
        <div className="post-top"> 
        <img src={props.user.thumbnailUrl}/>
        <div>{props.user.username}</div>
        </div>
    )
}



export default PostTop;