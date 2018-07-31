import React from 'react';
import Comment from './Comment';
import './CommentsSection.css';
import PropTypes from 'prop-types';

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsArr: props.commentsArray,
      newComment: ''
    };
  }

  newCommendHandler=(event)=> {
    this.setState({
      newComment: event.target.value
    })
  }

  newCommentAdder=(event)=> {
    event.preventDefault();
    let comments = this.state.commentsArr.slice();
    comments.push({
      username: "You",
      text: this.state.newComment
    })
    this.setState({commentsArr: comments, newComment: ''})
  }

  render() {
    return (
      <div className="comments-section">
        {this.state.commentsArr.map(comment => <Comment username={comment.username} text={comment.text} key={comment.text} />)}
        <form onSubmit={this.newCommentAdder}> <input onChange={this.newCommendHandler} className="add-comment" placeholder="Add a comment..." value={this.state.newComment} /></form>
      </div>
    )};
}

CommentsSection.propTypes = {
  memos: PropTypes.arrayOf(PropTypes.object)
};
export default CommentsSection;
