import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  // Sets up constructor to pass through props to the state settings.
  constructor(props) {
    super(props);
    this.state = {
      // Sets comments as the comments from dummy-data.js
      comments: props.comments,
      // New comments will start as an empty string
      newComment: '',
      // Heart count starts at 0
      heartCount: 0
    };
  }
  // Anonymous function to append a new comment.
  addNewComment = event => {
    event.preventDefault();
    // Checks if the newComment state is empty or not.
    if (this.state.newComment) {
      // ? Not 100% on this logic. I know it sets comments as
      // the new comment's state but not sure how it appends to
      // the comment array.
      this.setState({
        comments: [
          ...this.state.comments,
          { text: this.state.newComment, username: 'SomeUser' }
        ],
        newComment: ''
      });
    }
  };
  // Anon funciton that adds 1 to the heart counter.
  heartCount = () => {
    console.log(this.state.heartCount);
    this.setState(prevState => {
      return {
        heartCount: prevState.heartCount + 1
      };
    });
  };
  // ? Anon function handles the changing of the event target?
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state.newComment);
    });
  };
  render() {
    return (
      <div>
        {/* Map funciton that combs over each comment and key */}
        {/* and displays the comments. */}
        {this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        {/* Displays the heart character and heart count */}
        {/* onClick runs the heartCount function */}
        <div className="heart" onClick={this.heartCount}>
          ♥<span>{this.state.heartCount}</span>
        </div>
        {/* This displays the comment input field and passes the */}
        {/* props addComment and handleChange to the CommentInput component. */}
        <CommentInput
          addComment={this.addNewComment}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
// Checks if ComentSection proptypes are correct.
// Comments should be array of two strings.
CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
