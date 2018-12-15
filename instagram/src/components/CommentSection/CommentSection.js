import React from 'react';
import './comment.css';
import dummyData from '../../dummy-data';
// import Comment from './Comment';

class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            commentInput: [],
            newComment: '',
            placeholder: "Add a comment..."
        }
    }

    handleComments = (e) => {
        this.setState({commentInput: e.target.value});    
    }

    addNewComment = (e) => {
        e.preventDefault();
        const newComments = this.state.commentInput.slice;
        newComments.push({
            commentInput: this.state.newComment
        })
        this.setState({ commentInput: newComments, newComment: '', placeholder: "Add a comment..."});
        console.log(newComments)
 
    };

    render() {
        return (
            <form onSubmit={this.addNewComment}>
                <div className="commentSectionContainer">
                    <input placeholder={this.state.placeholder}
                        type="text"
                        value={this.state.commentInput}
                        onChange={this.handleComments}
                    />
                </div>
             </form>
        )
    }
}

// const CommentSection = props => {
//     console.log(props)
//     return (
//         <div className="commentSectionContainer">
//             <input placeholder="Add a comment..."
//             />
//         </div>
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

