import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: '',
    };
  }

  changeHandler = e => {
    this.setState({ newComment: e.target.value });
  }

  addNewComment = e => {
    e.preventDefault();
    this.setState({ comments: [...this.state.comments, {
      username: 'justin',
      text: this.state.newComment}],
    newComment: '', });
  };

  render() {
    return (
      <div>
        {this.state.comments.map((com, idx) => (
          <Comment key={idx} comment={com} />
        ))}
        <form onSubmit={this.addNewComment}>
          <input type="text" 
          name="addComment" 
          placeholder="Add a comment..." 
          value={this.state.newComment}
          onChange={this.changeHandler}
          />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;
