import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './CommentSection.css'



class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }

    commentHandler = event => {
        this.setState({ comment: event.target.value });
    };

    handleCommentSubmit = event => {
        event.preventDefault();
        const newComment = { text: this.state.comment, username: "kyle" };
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: "" });

        //the above line is a short cut for this.setState({ comments: comments, comment: "" });
    };

    render() {
        return (
            <Container className="custom-border2">
                {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
                <CommentInput
                    comment={this.state.comment}
                    submitComment={this.handleCommentSubmit}
                    changeComment={this.commentHandler} />
            </Container>
        )
    }

}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })
    )
}

export default CommentSection;
