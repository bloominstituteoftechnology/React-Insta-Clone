import React from 'react';
import Comment from './Comment'
import SubmitComment from './SubmitComment'

// We are using a constructor here because of where it gets called in the lifecycle and logistics of passing data around
class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ""
        };
    }
    // Create a function in CommentSection.js called addNewComment that takes in an event 
    // and an index number. The function will add the comment that is on the event object to 
    // the post that is at that index number.
    // Pass the addNewComment function down the component tree to where ever you have your 
    // 'Add a comment...' input.

    
    addNewComment = (e,i) => { 
        e.preventDefault();
        const comments = this.state.comments.slice();
        const newComment = {
            username: "default usrname",
            text: this.state.comment
        }
        comments.push(newComment);
        this.setState({comments: comments, comment: ""});
    }
    
    changeAddNewCommentHandler = event => {
        console.log(event.target.value);
        this.setState({comment:event.target.value});
    }

    render() {
        return (
            <div>
                {this.state.comments.map((comment,index) => (
                    <Comment 
                        key = {index}
                        commentUsername = {comment.username}
                        commentText = {comment.text}
                    />
                ))}
                <SubmitComment 
                    activeValue = {this.state.comment}
                    onChangeSignal = {this.changeAddNewCommentHandler}
                    addNewComment = {this.addNewComment}
                />
            </div>
        );
    }
}

// const CommentSection = props => {
//     return (
//         <div>
//             {props.comments.map(comment => (
//                 <Comment 
//                     commentUsername = {comment.username}
//                     commentText = {comment.text}
//                 />
//             ))}
//             <SubmitComment />
//         </div>
//     );
// }

export default CommentSection;


