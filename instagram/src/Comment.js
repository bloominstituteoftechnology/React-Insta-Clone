import React, {Component} from 'react';
import './Styles/Post.css';

export const Comment = (props) => {
        return(
            <div>
            {props.comments.map((comment) =>{
                return(
                    <div className="commentBox" key={comment.CommentId}>
                        <div className="user_block">
                            <img className="user_pic_thumb" src={comment.UserPic} alt="user"/>
                            <div className="username">{comment.UserPosted.toUpperCase()}</div>
                        </div>
                        
                        <div className="comment">{comment.PostedComment}</div>
                        
                    </div>
                );
            
            })}
            </div>
        );
}