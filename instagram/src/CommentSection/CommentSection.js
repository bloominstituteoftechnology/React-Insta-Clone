import React from 'react';
import Comment from './Comment';

const CommentSection = (props) => {
        return (
            <div>
                <p>{props.obj.likes}</p>
                <p>{props.obj.timestamp}</p>

                {props.obj.comments.map(item => {
                    return (
                        <Comment key={item.text} username={item.username} text={item.text} />
                    )
                })}

                <input></input>

            </div>
        )
}

export default CommentSection;


// Icons heart and CommentSection
// Likes
// Comments name and comment 
// Time 
// Add a comment input