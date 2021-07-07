import React from 'react';

function Comments(props) {

        return <div className="comments">
        {props.userComments.map(post => {
            return (
                <div className="commentContainer" ><span className="commentUserName"> {post.username}</span> {post.text}</div>
            )
        })}
        </div>

    }






export default Comments;