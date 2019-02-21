import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes,
      comments: [],
      newComment: "",
      user: localStorage.getItem("user"),
      isLiked: false,
      heart: "far fa-heart",
      isBookMarked: false,
      bookMark: "far fa-bookmark"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ comments: this.props.comments });
    }, 500);
  }

  newCommentHandler = event => {
    this.setState({ newComment: event.target.value });
  };

  addNewComment = e => {
    e.preventDefault();
    // build out our comment obj
    let userComment = {
      username: this.state.user,
      text: this.state.newComment
    };
    // clone our comments array
    const comments = this.state.comments.slice();
    // push obj into new clone
    comments.push(userComment);
    // set new clone as state... + reset our comment str
    this.setState({ comments: comments, newComment: "" });
  };

  likeHandler = () => {
    if (!this.state.isLiked) {
      let likes = this.state.likes + 1;
      this.setState({
        likes,
        isLiked: true,
        heart: "fas fa-heart"
      });
    }

    if (this.state.isLiked) {
      let likes = this.state.likes - 1;
      this.setState({
        likes,
        isLiked: false,
        heart: "far fa-heart"
      });
    }
  };

  bookMarkHandler = () => {
    if (!this.state.isBookMarked) {
      this.setState({
        isBookMarked: true,
        bookMark: "fas fa-bookmark"
      });
    }

    if (this.state.isBookMarked) {
      this.setState({
        isBookMarked: false,
        bookMark: "far fa-bookmark"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="comments-container">
          <div className="post-icons">
            <div>
              <i className={this.state.heart} onClick={this.likeHandler} />
              <i className="far fa-comment" />
            </div>
            <i className={this.state.bookMark} onClick={this.bookMarkHandler} />
          </div>
          <div className="like-count">{this.state.likes} likes</div>

          {this.state.comments.map(comment => {
            return (
              <div className="comment" key={Math.random()}>
                <strong>{comment.username}</strong> {comment.text}
              </div>
            );
          })}

          <div className="timestamp">
            {moment(this.props.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
          </div>
          <div className="add-comment">
            <form onSubmit={this.addNewComment}>
              <input
                type="text"
                placeholder="Add a comment..."
                name={this.props.newComment}
                value={this.state.newComment}
                onChange={this.newCommentHandler}
              />
            </form>
            <i className="fas fa-ellipsis-h" />
          </div>
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  timestamp: PropTypes.string,
  newComment: PropTypes.string
};

export default CommentSection;
