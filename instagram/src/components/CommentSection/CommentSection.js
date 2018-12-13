import React from 'react';
import './comment.css';
import Comment from './Comment';

const CommentSection = props => {
    console.log(props)
    return (
        <div className="commentSectionContainer">
            <input placeholder="Add a comment..."
            />
        </div>
    )
}

export default CommentSection;

// const CommentSection = props => {
//     console.log(props)
//     return (
//         <div>{props.comment.map( (comment, index) => (
//             <Comment key={index} comment={comment} />
//         ))}
//         </div>
//     )
// }

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

