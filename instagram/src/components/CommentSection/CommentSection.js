import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment.js';
import CommentInput from './CommentInput.js';

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
                {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
                <CommentInput />
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, usernam: PropTypes.string })
    )
};

export default CommentSection;


