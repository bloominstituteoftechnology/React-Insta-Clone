import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    // console.log(props)
    return(
        <div className="comment-section">
            {props.comments.map((comment, index) => {
                return (
                    <div>
                            <span className="username">{comment.username}</span>
                        <span className="text">
                            {comment.text}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}


// class CommentSection extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             username: '',
//             commentText: ''
//         };
//     };

//     render() {
//         return null
//     }
// }

export default CommentSection;