// import React from 'react';
// import './CommentSection.css';

//  const CommentSection = (props) => {
//     return (
//         <div className= "comments-section-wrapper-main">
//             {props.comments.map(user => {
//                 return (
//                     <div className= "comments-section-wrapper">
//                         <p><b>{user.username}</b></p>
//                         <p className= "comment-text">{user.comment.text}</p>

//                         <p className='timestamp'>{user.timestamp}</p>
//                         <hr></hr>
//                         <input className="addComment" placeholder="Add a comment..." />
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default CommentSection;

import React from 'react';
import './CommentSection.css';

 const CommentSection = (props) => {
    return (
        <div className= "comments-section-wrapper-main">
            {props.comments.map(comment => {
                return (
                    <div className= "comments-section-wrapper">
                        <p><b>{comment.username}</b></p>
                        <p className= "comment-text">{comment.text}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentSection;