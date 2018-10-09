import React from 'react';
import Comment from "./Comment";
import PropTypes from 'prop-types';

class CommentSection extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
    }
  }
  render() {
  return (
    <div>
      {this.state.comments.map((com, idx) => (
        <Comment key={idx} comment={com} />
      ))}
      <input type="text" name="addComment" placeholder="Add a comment..."/>
    </div>
  )
}
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
  username: PropTypes.string,
  text: PropTypes.string,
}))}

export default CommentSection;