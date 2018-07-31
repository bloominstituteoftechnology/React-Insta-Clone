import React from 'react';
import './CommentSection.css';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }
    render() {
        return (
            <div>
                {this.state.comments.map((comment, i) => (
                    <Comment key={i} comment={comment} />
                ))}
                <CommentInput />
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