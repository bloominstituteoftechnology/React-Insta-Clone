import React, {Component} from 'react';
const PostHeader =(prop)=>{
    return (
        <div className="post-header">
            <img src={prop.thumbnailUrl}></img>
            <p> <bold>{prop.username}</bold></p>
        </div>
    )
}
export default PostHeader;