import React from 'react';


const CommentSection = props => {
       return(
        <div className='comment'>
             {props.comments.map((comment, index) => {
                return( 
                    <p> <strong>{comment.username}</strong> {comment.text}</p>
                )
                })}
             <form onSubmit="">
                <input
                type="text"
                name="newComment"
                onChange=""
                value="Add a Comment"
                />
            </form>
        </div>

    )
}

export default CommentSection;