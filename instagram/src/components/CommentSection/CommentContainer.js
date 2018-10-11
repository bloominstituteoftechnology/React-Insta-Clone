import React from 'react';
import Comment from './Comment';

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
      </div>
    ) 
  }
}

export default CommentContainer;
