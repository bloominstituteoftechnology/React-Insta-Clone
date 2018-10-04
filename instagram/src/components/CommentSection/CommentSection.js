import React from 'react';
// import {
//     CardImg,
//     Card,
//     CardTitle,
   
//   } from 'reactstrap';

const CommentSection = props => {
    return (
        
            <div>
                <p>{props.data.likes} likes</p>
                {props.data.comments.map((comment =>
                    <div>
                        <p>{comment.username}<span> {comment.text}</span></p>
                    </div>
                    ))}
                <p>{props.data.timestamp}</p>
            </div>
            
    )
}

export default CommentSection;