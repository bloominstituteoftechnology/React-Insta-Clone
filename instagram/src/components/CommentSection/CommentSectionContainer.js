import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from './CommentSection';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }
commentTextHandler = e => {
  this.setState=({comment: e.target.value});
}

commentSubmitHandler = e => {
  e.preventDefault();
  alert('Clicked');
  const newComment = { text: this.state.comment, username: 'Leeroy Jenkins'};
  const comments = this.state.comments.slice();
  comments.push(newComment);
  this.setState({ comments, comment:""});
}
  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput 
        changeHandler={this.commentTextHandler}
        comment={this.state.comment}
        saveHandler={this.commentSubmitHandler}
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