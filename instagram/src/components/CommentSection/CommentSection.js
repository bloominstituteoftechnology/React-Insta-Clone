import React, {Component} from 'react';
import Comment from '../Comment/Comment.js'
import './CommentSection.css'
// import moment from 'moment';

//Receives an individual post's comments array from PostContainer
class CommentSection extends Component{
    constructor(){
        super();
        this.state={
            comments: [],
            user: '',
            addComment: '',
            newComment: ''
        }
    }

    componentDidMount(){
        this.setState({
            comments: this.props.comments,
            user: this.props.user,
            addComment: this.props.addComment

        })
    }

    handleChange = (event) =>{
        this.setState({
            newComment : event.target.value
        })
    }


    handleSubmit = (event) =>{
        event.preventDefault();
        // const commentInputBox = document.querySelector('.comment-input');
        // let commentText = commentInputBox.value;
        const newCommentObj = (this.state.newComment)
        ? {
            text: this.state.newComment,
            username: 'critter73'
        }
        : null;

        if(newCommentObj){
            // debugger;
            this.state.addComment(newCommentObj, this.state.user);
            // commentInputBox.value = '';
            this.state.newComment = '';
        }
    }

    render(){
        // console.log(moment.format());

        const commentList = (!this.state.comments.length === 0)
        ? null
        : this.state.comments.map(comment =>{
            return (
                <div key={this.state.comments.username + Math.random().toString()}>
                    <Comment comment={comment}/>
                </div>
            )
        })
        return (
            <div className="comments">
                {commentList}
                {/* <p>{moment.format()}</p> */}
                <div className="input-comment">
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} className="comment-input" type="text" placeholder="Add a comment..." value={this.state.newComment}/>
                        <button>...</button>
                    </form>
                </div>
            </div>
        )
    }
}
// //Receives an individual post's comments array from PostContainer
// const CommentSection = ({comments, user, addComment}) =>{
//     const commentList = (!comments.length === 0)
//     ? null
//     : comments.map(comment =>{
//         return (
//             <div key={comment.username + Math.random()}>
//                 <Comment comment={comment}/>
//             </div>
//         )
//     })

//     function handleSubmit(event){
//         debugger
//         event.preventDefault();
//         const commentInputBox = document.querySelector('.comment-input');
//         let commentText = commentInputBox.value;
//         const newComment = (commentText)
//             ? {
//                 text: commentText,
//                 username: 'critter73'
//             }
//             : null;

//         if(newComment){
//             // debugger;
//             addComment(newComment, user);
//             commentInputBox.value = '';
//         }




//     }

//     return (
//         <div className="comments">
//             {commentList}
//             <p>timestamp goes here</p>
//             <div className="input-comment">
//                 <form onSubmit={handleSubmit}>
//                     <input className="comment-input" type="text" placeholder="Add a comment..."/>
//                     <button>...</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

export default CommentSection;