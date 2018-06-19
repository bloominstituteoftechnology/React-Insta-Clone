import React from 'react'
import Comment from './Comment';



class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  render() {
    return (
      <div>{this.state.comments.map(comment => <Comment c={comment} />)}  <input placeholder="Add a comment" /></div>
    )
  }

}

export default CommentSection;