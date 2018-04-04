import React from 'react';

export default class CommentSection extends React.Component {
  commentElements() {
    return this.props.comments.map((comment) => <Comment {...comment} />);
  }

  render() {
    return (
      <div className="CommentSection">
        {this.commentElements()}
      </div>
    );
  }
}

function Comment(props) {
  return (
    <div className="CommentSection__comment">
      <span className="CommentSection__username">{props.username} </span>
      {props.text}
    </div>
  );
}