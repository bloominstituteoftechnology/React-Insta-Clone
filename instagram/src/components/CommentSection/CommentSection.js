import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentSection extends React.Component {
    constructor(props) {
        super();
        this.state = {
            comments: props.comments,
        };
    }

    render() {
        return (
            <div>
                {this.state.comments.map((commentMap, index) => (
                    <Comment key={index} comment={commentMap} />
                ))}
            </div>
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