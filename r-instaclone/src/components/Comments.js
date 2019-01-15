import React from 'react';

function Comments(props) {
    return (
        <div>
            {props.comment.username}
            <p>{props.comment.text}</p>
        </div> //end div

    )}

    export default Comments;