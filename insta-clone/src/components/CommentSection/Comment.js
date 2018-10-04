import React from 'react'
import './CommentSection.css'


const Comment = props => {

    return (
        <div className="section comment">
            <span className='post-user'>{props.user}</span> {''}
            <span className='post-comments'>{props.comments}</span>
        </div>


    )
}


export default Comment