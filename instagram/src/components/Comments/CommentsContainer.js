import React from 'react';
import AddComment from './AddComment';
import Comment from './Comment';
import './comments.css';

class CommentsContainer extends React.Component {
  render() {
    return (
      <div className="comments">
        {this.props.comments.map(x => {
          return <Comment username={x.username} text={x.text} />;
        })}
        <AddComment />
      </div>
    );
  }
}

export default CommentsContainer;
