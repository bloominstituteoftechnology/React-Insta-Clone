import React from 'react';
import CommentInput from './CommentInput';
import PropTypes from 'prop-types';
import CommentFeedback from './CommentFeedback';
import Comment from './Comment';
import './CommentSection.css';
 
class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
        };
    }
     render() {
        return (
            <div>
                <CommentFeedback />
                {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
                <CommentInput />
            </div>
        );
    }
};
 CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ 
            text: PropTypes.string,
            username: PropTypes.string,
        })
    )
}

 export default CommentSection;