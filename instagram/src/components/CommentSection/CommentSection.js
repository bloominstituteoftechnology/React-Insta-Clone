import React from "react";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";

import "./CommentSection.css";
import PropTypes from "prop-types";

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ""
        };
    }

    componentDidMount() {
        const id = this.props.postId;
        if (localStorage.getItem(id)) {
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.postId))
            });
        } else {
            this.setComments();
        }
    }

    componenetWillUnmount() {
        this.setComments();
    }

    setComments = () => {
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        );
    };

    handleCommentChange = e => {
        this.setState({ comment: e.target.value });
    };

    handleCommentSubmit = e => {
        e.preventDefault();

        const newComment = { username: "cmok", text: this.state.comment };
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: "" });

        setTimeout(() => {
            this.setComments();
        }, 500);
    };

    render() {
        return (
            <div>
                {this.state.comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
                <CommentForm
                    comment={this.state.comment}
                    handleChange={this.handleCommentChange}
                    handleSubmit={this.handleCommentSubmit}
                />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })
    )
};

export default CommentSection;