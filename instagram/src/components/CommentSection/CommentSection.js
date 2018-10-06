import React from 'react';
import Comment from '../Comment/Comment.js'
import './CommentSection.css'

//Receives an individual post's comments array from PostContainer
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

    // function handleSubmit(event){
    //     event.preventDefault();
    //     const commentInputBox = document.querySelector('.comment-input');
    //     let commentText = commentInputBox.value;
    //     const newComment = (commentText)
    //         ? {
    //             text: commentText,
    //             username: 'critter73'
    //         }
    //         : null;

    //     if(newComment){
    //         console.log('adding new comment from comm section');
    //         addComment(newComment)
    //         commentInputBox.value = '';
    //     }


    // }

    return (
        <div className="comments">
            {commentList}
            <p>timestamp goes here</p>
            <div className="input-comment">
                <form>
                    <input className="comment-input" type="text" placeholder="Add a comment..."/>
                    <button>...</button>
                </form>
            </div>
        </div>
    )
}

export default CommentSection;