import React from 'react'
import './commentSection.css'

const CommentSection = props => {
    return (
        <div className='comments'>{props.username}{props.text}{props.newInput}
        <form className='commentFieldContainer' onSubmit={props.newComment}>
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