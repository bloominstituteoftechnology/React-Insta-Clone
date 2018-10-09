import React from 'react';
import PropTypes from "prop-types";
import './CommentSection.css';

import CommentForm from '../CommentSection/CommentForm';

class CommentSection extends React.Component {

    state = {
        comments: [],
    }

    componentDidMount() {
        this.setState({ comments: this.props.comments, timestamp: this.props.timestamp });
    }

    render() {
        return (
            <>
                <div className="post-comments">
                    {this.state.comments.map(comment => (
                        <div className="comment">
                            <p><span className="comment-username">{comment.username}</span> {comment.text}</p>
                        </div>
                    ))}
                </div>
                <div className="post-timestamp">
                    <p>{this.state.timestamp}</p>
                </div>
                <div className="post-comment-form">
                    <CommentForm />
                </div>
            </>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    }).isRequired,
    timestamp: PropTypes.string.isRequired,
};

export default CommentSection;