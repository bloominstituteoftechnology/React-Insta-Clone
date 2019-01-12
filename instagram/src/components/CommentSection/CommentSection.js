import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
    };
  }

     inputHandler = e => {
        this.setState({comment: e.target.value});
      };

      newCommentHandler = e => {
          e.preventDefault();
          const addedComment = { text: this.state.comment, username: 'fbt328' };
          // username is hardcoded
          const comments = this.state.comments.slice();
          comments.push(addedComment);
          this.setState({ comments, comment: '' });
      };

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput  
        addNewComment = {this.newCommentHandler}
        commentInputHandler = {this.inputHandler}
        />
      </div>
    );
  }
}

 CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};
 export default CommentSection;

//  add comment submit handlers

//comment is an array of data with a username and text
// held in dummy-data.js