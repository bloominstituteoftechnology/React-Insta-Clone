import React from 'react';

const Comment = (props) => {
    console.log(props.comment.comments);
    return ( <div class="commentContainer">
        {props.comment.comments.map((item, index) => {
            return (
                <div class="comment">
                    <div class="commentUser">{item.username}</div>
                    <div class="commentText">{item.text}</div>
                </div>
            )
        })}
            <div class="timestamp">6 hours ago</div>
            <form class="addComment">
                <input type="text" placeholder="Add a comment . . ."></input>
            </form>
        </div> );
}
 
export default Comment;