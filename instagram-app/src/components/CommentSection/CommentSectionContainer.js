import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: props.CommentSection
        };
    }
    render() {
        return(
            <div>
                {this.state.comments.map((b, a) => <Comment key={a} comment={b} />)}
                <CommentForm />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
  };
  
  export default CommentSection;