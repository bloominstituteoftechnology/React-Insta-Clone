import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";
import { FiHeart, FiMessageCircle, FiSend } from "react-icons/fi";
import TimePosted from "./TimePosted";
import { Input } from "reactstrap";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      addComment: "" /*Buffer for input field*/,
      likes: 0
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.data.comments,
      likes: this.props.data.likes
    });
  }

  /* Takes user input in comment field into state */
  onChangeHandler = event => {
    this.setState({
      addComment: event.target.value
    });
  };

  /* Adds comment to this.state.comments, resets input field */
  addNewComment = event => {
    event.preventDefault();
    const currentComments = this.state.comments;
    console.log(currentComments);
    currentComments.push({
      username: this.props.user,
      text: this.state.addComment
    });
    return this.setState({
      comments: currentComments,
      addComment: ""
    });
  };

  /* Add Likes */
  addLikeHandler = event => {
    this.setState((prevState, props) => {
      return {
        likes: prevState.likes + 1
      }
    })
  };

  render() {
    return (
      <div className={"comments-container"}>
        <div className={"icon-container"}>
          <FiHeart className={"icon like"} onClick={this.addLikeHandler} />
          <FiMessageCircle className={"icon"} />
          <FiSend className={"icon"} />
        </div>
        <span className={"likes"}>{this.state.likes} likes</span>
        {this.props.data.comments.map((comments, index) => {
          return (
            <div className={"comments-field"} key={comments.text}>
              <p className={"comment-content"}>
                <span className={"comment-username"}>{comments.username}</span>
                {comments.text}
              </p>
            </div>
          );
        })}
        <TimePosted
          className={"timestamp"}
          timestamp={this.props.data.timestamp}
        />
        <form onSubmit={this.addNewComment}>
          <Input
            onChange={this.onChangeHandler}
            className={"comment-input"}
            placeholder={"Add comment..."}
            value={this.state.addComment}
          />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  data: PropTypes.shape({
    likes: PropTypes.number,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  }),
  user: PropTypes.string
};

export default CommentSection;
