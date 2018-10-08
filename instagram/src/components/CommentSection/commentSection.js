import React from 'react'
import './commentSection.css'

const CommentSection = props => {
    return (
        <div className='comments'>{props.comments}
        <form className='commentFieldContainer'>
            <input className='addComment' type='text' value='Add a comment...'></input>
        </form>
        </div>
    )
}

export default CommentSection;