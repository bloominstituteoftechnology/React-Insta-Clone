import React from 'react';
import ReactDOM from 'react-dom';
import CommentSection from './CommentSection';

const CommentContainer = (props) => {
        return(
            <div>
                {props.comments.map(comment => <div>

                    {comment.username}
                    {comment.text}
                </div>)}
            </div>
        )


}

   

export default CommentContainer