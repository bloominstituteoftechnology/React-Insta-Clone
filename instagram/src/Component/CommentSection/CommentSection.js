import React from "react";

export const CommentSection = ({ item }) => {


    return (<div>{console.log(item)}
        {
            item.comments.map((msg, index) => (
                <div key={index}><span className="comments">{msg.username}</span>  {msg.text} </div>
            )

            )}

    </div>)
}