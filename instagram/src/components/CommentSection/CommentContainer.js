import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
    }

    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                <CommentInput />
            </div>
        );
    }
}

export default CommentSectionContainer;