import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentBar from './CommentBar';
import './darkheart.jpg';
// this component contains all comments in a given post

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: "",
      likes: props.likes,
    };
  }

  addNewComment = (event) => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {text: this.state.newComment, username: localStorage.username}
      ],
      newComment: "",
    });

  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  increaseLikes = (event) => {
    event.preventDefault();
    this.setState({ likes: this.state.likes + 1 });
  }

  render() {
    return (
      <div className="commentSection">
      {this.state.likes}
      <img onClick={this.increaseLikes} className="heart" src="https://clip2art.com/images/love-clipart-2.png" />
      {this.state.comments.map((comment, index) => (
        <Comment
          key={index}
          username={comment.username}
          text={comment.text}
        />

      )
    )}
    <CommentBar
      addNewComment={this.addNewComment}
      handleChange={this.handleChange}
      comments={this.comments}
      />
    </div>
    )
  }
}

CommentSection.propTypes = {
  commentData: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
  })),
}

export default CommentSection;
