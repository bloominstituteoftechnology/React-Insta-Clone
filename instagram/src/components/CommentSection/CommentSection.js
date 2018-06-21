import React from "react";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import PropTypes from "prop-types";
import styled from 'styled-components';

// import "./CommentSection.css";

// styled-components
const CommentSectionContainer = styled.div`
    max-width: 100%;
    margin: 20px auto;
    border-radius: 5px;
`;

const CommentSectionTimestamp = styled.div`
    margin: 10px 20px;
`;

// Render and return CommentSection with CommentForm
// Props: postId={this.props.post.imageUrl} comments={this.props.post.comments}
class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        // Add state for comments
        this.state = {
            comments: props.comments,
            comment: ""
        };
    }

    componentDidMount() {
        const id = this.props.postId;
        // If postId in localStorage, setState, JSON.parse, and getItem
        // Else setComments()
        if (localStorage.getItem(id)) {
            this.setState({
                comments: JSON.parse(localStorage.getItem(id))
            });
        } else {
            this.setComments();
        }
    }

    componentWillUnmount() {
        this.setComments();
    }

    setComments = () => {
        // setItem in localStorage with postId and JSON.stringify comments
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
        // newComment with default username
        const newComment = { username: localStorage.getItem('username'), text: this.state.comment };
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: "" });

        setTimeout(() => {
            this.setComments();
        }, 500);
    };

    render() {
        return (
            <CommentSectionContainer>
                {/* Map comment, index to each Comment component */}
                {this.state.comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}

                <CommentSectionTimestamp>
                    {this.props.timestamp}
                </CommentSectionTimestamp>

                {/* Pass initial comment state and handler methods as props */}
                <CommentForm
                    comment={this.state.comment}
                    handleChange={this.handleCommentChange}
                    handleSubmit={this.handleCommentSubmit}
                />
            </CommentSectionContainer>
        );
    }
}

// prop-type check
CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })
    )
};

export default CommentSection;