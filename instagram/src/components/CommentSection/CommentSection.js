import React from 'react';
import './CommentSection.css';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            input: ''
        };
    }

    
    addNewComment = event => {
        event.preventDefault();
        const comments = this.state.comments.slice();
        comments.push({ text: this.state.input, username: "internet user" });
        this.setState({ comments, input: '' });
    }

    commentInput = event => {
    this.setState({ input: event.target.value });
    }

    render() {
        return (
            <div>
                {this.state.comments.map((comment, i) => (
                    <Comment key={i} comment={comment} />
                ))}
                <CommentInput value={this.state.input} commentInputHandler={this.commentInput} addNewCommentHandler={this.addNewComment} />
            </div>
        );
    }

};

CommentSection.propType = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};

export default CommentSection;