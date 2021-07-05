import React from 'react';
import './Post.css';
import Comment from '../CommentSection/Comment';

const Post = props => {
    return (
        <div className="post-container">
        <div className="post-header"><img className="thumbnail" src={props.data.thumbnailUrl} alt="thumbnail"></img>{props.data.username}</div>
        <img className="post-image" src={props.data.imageUrl} alt={props.data.username}></img>
        <Comment comments={props.data.comments} />
        </div>    )
        };

        export default Post;