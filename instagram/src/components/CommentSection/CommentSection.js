import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } else {
      this.setComments();
    }
  }

  componentWillUnmount() {
    this.setComments();
  }

  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  handleCommentSubmit = event => {
    event.preventDefault();
    const newComment = { text: this.state.comment, username: "AgentSmith" };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: " " });
    setTimeout(() => {
      this.setComments();
    }, 600);
  };

  render() {
    return (
      <div>
        {this.state.comments.map((comment, input) => (
          <Comment key={input} comment={comment} />
        ))}
        <CommentInput />
      </div>
    );
  }
}

CommentSection.PropTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.sting })
  )
};

export default CommentSection;
