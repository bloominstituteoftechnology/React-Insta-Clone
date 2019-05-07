import React from "react";

export const CommentSection = (props) => {

    return (<div>
        {
            props.comments.map((msg, index) => (
                <div key={index}><span className="comments">{msg.username }</span>: {msg.text} </div>
            )
            )}

    </div>)
}