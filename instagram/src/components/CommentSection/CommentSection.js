import React, {Component} from 'react';
import Comment from '../Comment/Comment.js'
import './CommentSection.css'

//Receives an individual post's comments array from PostContainer
class CommentSection extends Component{

    constructor(props){
        console.log('commentsection',props);
        super();
        this.setState = {
            comments: props.comments
        }
    }

    commentList = (this.state.comments.length === 0)
    ? null
    : this.state.comments.map(comment =>{
        return (
            <div key={this.state.comment.username + Math.random()}>
                <Comment comment={this.state.comment}/>
            </div>
        )
    })

    // function handleSubmit(event){
    //     event.preventDefault();
    //     // const commentInputBox = document.querySelector('.comment-input');
    //     // let commentText = commentInputBox.value;
    //     // const newComment = (commentText)
    //     //     ? {
    //     //         text: commentText,
    //     //         username: 'critter73'
    //     //     }
    //     //     : null;

    //     // if(newComment){
    //     //     console.log('adding new comment from comm section');
    //     //     addComment(newComment)
    //     //     commentInputBox.value = '';
    //     // }


    // }

    render(){

        return (
            <div className="comments">
                commentList
                <p>timestamp goes here</p>
                <div className="input-comment">
                    <form onSubmit={this.handleSubmit}>
                        <input className="comment-input" type="text" placeholder="Add a comment..."/>
                        <button>...</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CommentSection;