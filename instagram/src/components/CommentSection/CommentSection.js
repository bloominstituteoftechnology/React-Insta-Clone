import React from 'react';

export default function CommentSection(props) {
    return (
        <div className="CommentSection">    
            <div className="CommentSectionIcons">
                Icon 
                Icon 
            </div>
            <div>
                {props.likes}
            </div>
            <div>
                {props.comments}
            </div>
            {
                props.comments.map(comment => {
                    return (
                        <div>
                            <p>{comment.username}</p>
                            <p>{comment.text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}