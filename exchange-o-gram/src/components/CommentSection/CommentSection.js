import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Comment from './Comment.js';
import './CommentSection.css';

class CommentSection extends React.Component{
    constructor(props){
        super(props);

        const format = 'MMMM DD YYYY hh:mm:ss';

        this.state = {
            postIndex: props.postIndex,
            comments: props.comments,
            newComment: '',
            timeStamp: moment(props.timeStamp, format).fromNow().toUpperCase()
        }
    }

    addNewComment = (event)=>{
        event.preventDefault();
        this.props.addNewComment(this.state.newComment, this.state.postIndex);
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
        this.props.addLike(this.state.postIndex);
    }

    render(){
        return (
            <div className="comments-container">
                <div className="comments-icon-container"><i onClick={this.addLike} className="comments-icon far fa-heart fa-2x"></i><i className="comments-icon far fa-comment fa-2x"></i></div>
                <p className="likes">{this.props.likes} likes</p>
                <div className="comments">{this.state.comments.map((comment, index)=>{
                    return(
                        <div key={comment.text}>
                            <Comment postIndex={this.state.postIndex} commentIndex={index} comment={comment} deleteComment={this.props.deleteComment}/>
                        </div>
                    )
                })}</div>
                <p className="time-stamp">{this.state.timeStamp}</p>
                <form className="add-comment-form" onSubmit={this.addNewComment}>
                    <input className="add-comment" onChange={this.storeNewComment} placeholder="Add a comment..." value={this.state.newComment}></input>
                </form>
            </div>
        )
    }
}

CommentSection.propTypes = {
    postIndex: PropTypes.number,
    likes: PropTypes.number,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })),
    timeStamp: PropTypes.string,
    addLike: PropTypes.func.isRequired,
    addNewComment: PropTypes.func.isRequired
}

export default CommentSection;