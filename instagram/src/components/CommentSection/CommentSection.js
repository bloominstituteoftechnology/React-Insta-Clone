import React from 'react';
import Proptypes from 'prop-types';
import Comment from './Comment';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: props.time,
      likes: props.likes,
      comments: props.comments
    }
  }

  render() {

    const comments = this.state.comments.map(comment => <Comment user={comment.username} text={comment.text} />)

    return(
      <div className="post__comments">
        <div  className="post__comments__interaction">
          <p>{this.state.likes}</p>
        </div>
        {comments}
        <p className="post__comments__time">{this.state.time}</p>
      </div>
    );
  }
}

export default CommentSection;
