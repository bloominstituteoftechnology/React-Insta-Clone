import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';
import Comment from "./Comment";
import AddComment from "./AddComment";

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }

    commentHandler = e => {
        this.setState({comment: e.target.value})
    }

    submitComment = e => {
        e.preventDefault();
        const newComment = {username: 'mempo', text: this.state.comment}
        const commentString = this.state.comments
        commentString.push(newComment)
        this.setState({
            comments: commentString,
            comment: ''
        })
    }

    render(){
        return(
        <div className="comment-container">
        {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
        <AddComment 
            comment={this.state.comment}
            submitComment={this.submitComment}
            commentHandler={this.commentHandler}
        />
        </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape(
            {text: PropTypes.string, 
            username: PropTypes.string}
            )
    )
}

export default CommentSection;