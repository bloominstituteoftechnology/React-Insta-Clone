import React from 'react';
import './Comment.css';
import Comment from './Comment';
import CommentInput from './CommentInput';

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
          <Comment />
          <CommentInput />
        </div>
     );
    };
};

export default CommentContainer;