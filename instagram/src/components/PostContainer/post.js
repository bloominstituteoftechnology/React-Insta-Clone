import React from 'react';
import './post-container.css'

const Post = props => {
    return (
        <div className="post">
            <div className="postHeader">
                <img src={props.post.thumbnailUrl} alt=""></img>
                <h2>{props.post.username}</h2>
            </div>
            <div className="postImage">
                <img src={props.post.imageUrl} alt=""></img>
                <p>{props.post.likes} likes</p>
            </div >
        </div >
    )
}

export default Post;