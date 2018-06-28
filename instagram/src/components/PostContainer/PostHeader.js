import React from 'react';

const PostHeader = props => {
    return (
        <div className = "post-header">
            {/* <img src =  {props.post.thumbnailUrl} alt = "" />  */}
            <img src =  {props.thumbnailURL} alt = "" /> 
            {/* Username: {props.post.username} */}
            Username: {props.username}
        </div>
        )
    };


export default PostHeader;