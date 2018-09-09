import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  addComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  addNewComment = e => {
    e.preventDefault();
    const newComment={text: this.state.comment, username: "Anthony Greb"};
    const comments=[...this.state.comments];
    comments.push(newComment);
    this.setState({ comments, comment: "" });
  };

  handleCommentInput = e => {
    this.setState({ comment: e.target.value });
  }

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId)),
      });
    }
    else {
      this.addComments();
    }
  }

  componentWillUnmount() {
    this.addComments();
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
        <CommentInput 
          comment={this.state.comment}
          addNewComment={this.addNewComment}
          handleCommentInput={this.handleCommentInput}
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