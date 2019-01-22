import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      likes: 373,
      comment: ""
    };
  }

  count = () => {
    const addLike = this.state.likes + 1;

    this.setState({
      likes: addLike
    });
  };

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } else {
      this.setComment();
    }
  }

  componentWillUnmount() {
    this.setComment();
  }

  setComment = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  commentHandle = ev => {
    this.setState({
      comment: ev.target.value
    });
  };

  commentSubmit = ev => {
    ev.preventDefault();
    const addComment = {
      text: this.state.comment,
      username: "josepheastman"
    };
    const comments = this.state.comments.slice();
    comments.push(addComment);
    this.setState({
      comments,
      comment: ""
    });
  };

  render() {
    return (
      <div className="comment-container">
        <div className="like-bar">
          <i onClick={this.count} className="far fa-heart" id="ig-heart" />
          <i className="far fa-comment" id="ig-comment" />
          <p>{this.state.likes} likes</p>
        </div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        <CommentInput
          comment={this.state.comment}
          submitComment={this.commentSubmit}
          changeComment={this.commentHandle}
        />
      </div>
    );
  }
}

CommentSectionContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  )
};

export default CommentSectionContainer;
