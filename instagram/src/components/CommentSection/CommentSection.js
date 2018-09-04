import React from 'react';

import './CommentSection.css';

// class CommentSection extends React.Component {
//     constructor (props) {
//         super (props);
//         console.log('commentsection props', props)
//         this.state = {};
//     }

//     render() {
//         return (
//             null
//             // <div className = 'comment-section-div'>
//             //     <h5>{ props.comment.username }</h5>
//             //     <p>{ props.comment.text }</p>
//             // </div>
//         );
//     }
// }

const CommentSection = props => {
    return (
        <div className = 'comment-section-div'>
            <h5>{ props.comment.username }</h5>
            <p>{ props.comment.text }</p>
        </div>
    );
}

export default CommentSection;
