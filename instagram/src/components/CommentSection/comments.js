import React from 'react';
import './comments.css';
/*The CommentSection component will receive the array of comments as props and render a Comment component with the username of the poster as well as the post's text. Additionally, there should be an input box that allows users to submit a new comment for any post. We'll work on posting new comments tomorrow. 

key = {data.key} user={data.username} text={data.text}
*/

const Comments = props => {
    return (
        <div key={props.key}>
            <p className="comment-text"><strong>{props.user}</strong> {props.text}</p>
        </div>
    )
}

export default Comments