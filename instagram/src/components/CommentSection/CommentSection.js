import React from 'react';
import './CommentSection.css'


const CommentSection = props => {
    return (
       <div> 
            <div className="comment-icons">
                <i class="far fa-heart"></i>
                <i class="far fa-comment"></i>
            </div>
            <div className="likes">{`${props.likes} likes`}</div>
            {props.comments.map((comment) => 
                    {return (
                        
                        <div className="comment-username">
                            {comment.username}
                            <span className="comment-text" >{comment.text}</span>
                        </div>
                   
                    )})}
            <div className="comment-container">
                <input className="comment-input" type="text" placeholder="Add a comment..."></input><span><button className="commentBtn">...</button></span>
            </div>
       </div>
    ) 
}



export default CommentSection;