import React from 'react';
import Comment from '../Comment/Comment.js'
import './CommentSection.css'

const CommentSection = ({comments}) =>{

    const commentList = (!comments.length === 0)
    ? null
    : comments.map(comment =>{
        return (
            <div key={comment.username + Math.random()}>
                <Comment comment={comment}/>
            </div>
        )
    })
    return (
        <div className="comments">
            {commentList}
            <p>timestamp goes here</p>
            <div className="input-comment">
                <input type="text" placeholder="Add a comment..."/>
                <button>...</button>
            </div>
        </div>
    )
}

export default CommentSection;