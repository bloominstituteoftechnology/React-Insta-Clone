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
        <h1>wtf</h1>
      </div>
    ) 
  }
}

export default CommentContainer;
