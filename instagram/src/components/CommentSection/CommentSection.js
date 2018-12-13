import React from 'react';
import './comment.css';
import commentData from './commentData';
import Comment from './Comment';

const CommentSection = props => {
    console.log(props)
    return (
        <div>{props.comment.map( (comment, index) => (
            <Comment key={index} comment={comment} />
        ))}
        </div>
    )
}

// const CommentSection = props => {
//     // const commentData = props.commentData;
//     const commentsArray = props.commentData.map( comment => (
//         comment.comments.map((commentInfo, index) =>
//         <ul key={index} value={commentInfo}>{commentInfo.username} {commentInfo.text}</ul> 
//         )
//     ))
//     return (
//         <div>{commentsArray}</div>
//     )
// }

export default CommentSection;

// class CommentSection extends React.Component {
//     constructor() {
//         super();
//         this.state ={
//         commentData: commentData,
//         comment: ''
//         }
//     }


//     comments = (e) => {
//    this.setState({comment: e.target.value});
//     }

//     displayComments = (id) => {
//         let comments = this.state.comment;
//          comments.map( comment => {
//              this.setState({
//                 comments
//              })
//          })
        // {this.id.username}
        // {this.id.text}
    // }
//     this.setState((prevstate) => ({
//         todos: prevstate.todos.concat(newMessage),
//         message: ''
//     }));
// };

//     render () {
//         return (
//             <div>
//              displayComments={this.displayComments}
//             </div>
//         );
//     }
// }

