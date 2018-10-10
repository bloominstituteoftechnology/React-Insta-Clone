import React, {Component} from 'react';
const PostHeader =(prop)=>{
    return (
        <div className="post-header">
            <img src={prop.thumbnailUrl}></img>
            <p> {prop.username}</p>
        </div>
    )
}
export default PostHeader;