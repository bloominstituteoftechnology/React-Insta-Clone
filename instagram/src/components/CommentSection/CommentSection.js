import React from 'react';
import AddComment from './AddComment';

const CommentSection = props => {
    console.log(props)
    return (
        <div>
             {props.comments.map(comment => (
                <AddComment key={comment.text} comment={comment} />
             ))}
             <form>
                 <input
                    type="text" 
                    placeholder="Add a comment..."
                />
             </form>
        </div>
    )
}

export default CommentSection;
