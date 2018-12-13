import React from "react";
import Comment from './../CommentSection/Comment';
import moment from './../../../node_modules/moment';

import './Post.css'
const Post = props => {
    return(
        <div className="post-container container">
            <div className="user-info ">
                <div><img src={props.thumbnailUrl} alt="User Thumbnail Image"/></div>
                <div>{props.username}</div>
            </div>
            <div className="post-image">
                <img src={props.imageUrl} alt="Post Image"/>
            </div>
            
            <div className="likes container">
                <div className="icons">
                    <i className="fa fa-heart-o"></i>
                    <i className="fa fa-comment-o"></i>
                </div>
                <div className="count">
                {props.likes} likes </div>
            </div>

            <div className="comments">
                {props.comments.map(comment => {
                    return (
                        <Comment
                            key={Math.random()}
                            username={comment.username}
                            text={comment.text}
                        />
                    )
                })}
            </div>
            
            <div class="timestamp">
            {moment().startOf('hour').fromNow()}
            </div>


            
            
        </div>
    )
}

export default Post;