import React from 'react';

const Comment = (props) => {
    console.log(props.comment.comments);
    return ( <div>
        {props.comment.comments.map((item, index) => {
            return (
                <div>{item.username}  {item.text}</div>
            )
        })}
            <div class="timestamp">6 hours ago</div>
            <div class="addComment">Add a comment . . .</div>
        </div> );
}
 
export default Comment;