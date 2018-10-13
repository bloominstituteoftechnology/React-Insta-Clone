import React, {Component} from 'react';
import Comment from '../Comment/Comment.js'
import './CommentSection.css'
import moment from 'moment';
import {CSDiv, CommentInput, CommentButton} from '../styled-components';

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
        const newCommentObj = (this.state.newComment)
        ? {
            text: this.state.newComment,
            username: 'critter73'
        }
        : null;

        if(newCommentObj){
            this.state.addComment(newCommentObj, this.state.user);

            this.setState({
                newComment: ''
            })
        }
    }

    render(){

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
            <CSDiv>

                {commentList}
                <p className="timestamp">{moment().startOf('day').fromNow()}</p>
                <div className="input-comment">
                    <form onSubmit={this.handleSubmit}>
                        <CommentInput onChange={this.handleChange} className="comment-input" type="text" placeholder="Add a comment..." value={this.state.newComment}/>
                        <CommentButton type="success">...</CommentButton>
                    </form>
                </div>
            </CSDiv>
        )
    }
}


export default CommentSection;