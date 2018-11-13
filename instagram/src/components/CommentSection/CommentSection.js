import React from 'react';
import './CommentSection.css';

function CommentSection(props){
    return <section className='comments'>
        {props.comments.map(comment=>(
            <div className='comment'>
                <span>{comment.username}</span>
                <p>{comment.text}</p>        
            </div>
        ))}
        <div className='timestamp'>{props.timestamp}</div>
        <form>
            <input>
            </input>
        </form>
    </section>
}

export default CommentSection