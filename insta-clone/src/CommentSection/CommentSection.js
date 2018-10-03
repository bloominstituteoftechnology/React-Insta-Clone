import React from 'react'
import Comment from './Comment'



const CommentSection = props => {

    return (
        <div className='comment-section'>
        <div className='section likes'>
                {props.likes} # likes</div>
        {props.comments.map((comment, index) => {
            return <Comment username={comment.username} comments={comment.comments} key={index} />
        })}
        </div>
    )
}


export default CommentSection