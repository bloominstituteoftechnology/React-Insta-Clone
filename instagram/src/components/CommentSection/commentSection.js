import React from 'react'
import './commentSection.css'


const CommentSection = props => {
    return (
        <div className='comments'>{props.text.map(text => {
            return <div className='commentstext'>{text.username}: {text.text}</div>
        })}{props.newInput}
        <form className='commentFieldContainer' onSubmit={props.newComment} >
            <input 
                 className='addComment' 
                 type='text'
                 name='newInput'
                 onChange={props.changeHandler}
                 value={props.newInput} 
                 placeholder='Leave a comment...'
                  />
        </form>
        </div>
        
    )
}

export default CommentSection;



//<div className='comments'><h4>{props.comment.text}</h4><span>{props.comment.username}</span>