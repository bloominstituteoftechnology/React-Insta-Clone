import React from 'react';
import './PostTitle.css'



const PostTitle = props => {
    return (
        <div className="post-header">
        <img className="post-thumbnail" src={props.thumbnail} alt="header" />
       <h1 className="post-title">{props.username}</h1>
       </div>
    )
}







export default PostTitle