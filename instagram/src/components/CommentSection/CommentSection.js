import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: '',
        };
    }

    render() {
        return ( 
            <div>
                {this.state.comments.map((comment, index) =>
                    <Comment 
                    key={index}
                    comment={comment}
                    />
                    )}
                    <CommentInput />
            </div>
        ); 
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string,
        })
    )
}

export default CommentSection;