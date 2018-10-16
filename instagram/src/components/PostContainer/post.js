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
            <Comments likes={props.post.like} comments={props.post.comment} />
        </div >
    )
}

export default Post;