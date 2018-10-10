import React from 'react';
import PropTypes from "prop-types";
import './CommentSection.css';

import CommentForm from '../CommentSection/CommentForm';

class CommentSection extends React.Component {

    state = {
        postKey: this.props.postKey,
        timestamp: this.props.timestamp,
        comments: this.props.comments,
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
                    <CommentForm postKey={this.state.postKey} addNewComment={this.props.addNewComment} />
                </div>
            </>
        )
    }
}

CommentSection.propTypes = {
    postKey: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    addNewComment: PropTypes.func,
    comments: PropTypes.array,
};

CommentSection.defaultProps = {
    postKey: 0,
    timestamp: Date.now(),
}

export default CommentSection;