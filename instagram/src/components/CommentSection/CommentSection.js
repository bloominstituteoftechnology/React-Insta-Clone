import React from 'react';
import PropTypes from "prop-types";
import './CommentSection.css';

class CommentSection extends React.Component {

    render() {
        return (
            <div className="comment">
                <p><span className="comment-username">{this.props.comment.username}</span> {this.props.comment.text}</p>
            </div>
        )
    }
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    }).isRequired
};

export default CommentSection;