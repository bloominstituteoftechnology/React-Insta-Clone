import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div className="singleComment">
        <span>{this.props.username} </span>
        {this.props.text}
      </div>
    );
  }
}

export default Comment;
