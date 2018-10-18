import React from 'react';
import styles from './CommentSection.css';
import Comment from '../Comment/Comment.js'

const CommentSection=(props)=>{
let comments=props.comments;
let likes=props.likes;
let id=props.id;
return(
    <div class="comment-section">
        <div class="likes">
    <button onClick={props.onClick} id={props.id}>&#9825;</button>
    &#128488;
    <p>{likes}&nbsp; likes</p>
    </div>

    {comments.slice().map(
        (comment)=>{
            return(
                <div>
                    <Comment comment={comment}/>
</div>
                       
            )
       
        }

    )
    
    }         <form id={id} onSubmit={props.handleNew} onChange={props.handleChange}class="input-comment" value={props.val}>
    <input type="text" value={props.val}placeholder="Add a comment"/>
    &#8230;
    </form>
    
</div>
)


}

export default CommentSection;