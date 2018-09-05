import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
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
            <div className='comment-section'>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                <CommentInput />
            </div>
        );
    }
}

CommentSection.PropTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};

export default CommentSection;