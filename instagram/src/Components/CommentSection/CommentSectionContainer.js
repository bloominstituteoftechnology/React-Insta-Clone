import React from 'react';
import './Comment.css';
import Comment from './Comment';
import CommentInput from './CommentInput';
import PropTypes from 'prop-types';

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }
     render () {
      return (
        <div comment-container>
          {this.state.comments.map((c) => <Comment comment={c}/>)}
          <CommentInput />
        </div>
     );
    };
};

CommentContainer.PropTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string 
        })
    )
};

export default CommentContainer;