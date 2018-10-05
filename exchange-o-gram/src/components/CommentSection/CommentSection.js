import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment.js';
import './CommentSection.css';

class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: props.index,
            comments: props.comments,
            newComment: ''
        }
    }

    addNewComment = (event)=>{
        event.preventDefault();
        this.props.addNewComment(this.state.newComment, this.state.index);
        this.setState({
            newComment: ''
        })
    }

    storeNewComment = (event)=>{
        this.setState({
            newComment: event.target.value
        })
    }

    addLike = (event)=>{
        event.preventDefault();
        this.props.addLike(this.state.index);
    }

    render(){
        return (
            <div className="comments-container">
                <div className="comments-icon-container"><i onClick={this.addLike} className="comments-icon far fa-heart fa-2x"></i><i className="comments-icon far fa-comment fa-2x"></i></div>
                <p className="likes">{this.props.likes} likes</p>
                <div className="comments">{this.state.comments.map((comment)=>{
                    return(
                        <div key={comment.text}>
                            <Comment comment={comment}/>
                        </div>
                    )
                })}</div>
                <p className="time-stamp">2 HOURS AGO</p>
                <form className="add-comment-form" onSubmit={this.addNewComment}>
                    <input className="add-comment" onChange={this.storeNewComment} placeholder="Add a comment..." value={this.state.newComment}></input>
                </form>
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;