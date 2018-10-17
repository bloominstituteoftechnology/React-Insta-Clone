import React from 'react';
import './post-container.css'
import Comments from '../CommentSection/comments'

const Post = props => {
    return (
        <div className="post">
            <div className="postHeader">
                <img src={props.post.thumbnailUrl} alt=""></img>
                <h2>{props.post.username}</h2>
            </div>
            <div className="postImage">
                <img src={props.post.imageUrl} alt=""></img>
            </div >
            <Comments  />
        </div >
    )
}

export default Post;