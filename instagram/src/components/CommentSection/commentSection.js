import React from 'react'
import './commentSection.css'
// import like from './likeandcomment.PNG'

const CommentSection = props => {
    return (
        
        <div className='comments'><h4>{props.text}</h4>{props.newInput}
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