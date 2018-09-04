import React from 'react';
import Comment from './Comment';
import CommentBar from './CommentBar';
import PropTypes from 'prop-types';

class CommentSectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            comment: props.comment
        };
    }

    render() {
        return (
            <div>
                {this.state.comment.map((comment)=> <Comment comment={comment}/>)}
                <CommentBar />
            </div>
        );
    }
}

CommentSectionContainer.propTypes = {
    comment: PropTypes.arrayOf(
        PropTypes.shape({text: PropTypes.string, username: PropTypes.string})
    )
};

export default CommentSectionContainer;