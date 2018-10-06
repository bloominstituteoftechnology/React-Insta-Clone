import React from 'react';
import './CommentSection.css'
import SingleComment from './SingleComment'


const CommentSection = (props) =>{
    return(
        <div>
            <div>
                {props.comments.map(item =>{
                    return(
                        <SingleComment key={item.text} comment={item.text} user={item.username} />
                    )
                })}
            </div>
            <p className='timestamp'>{props.timestamp}</p>
            <div className='addComment'>
                <input type='text' value='Add comment...'/>
            <i className="fas fa-ellipsis-h"></i>
            </div>
        </div>
    )
}

export default CommentSection