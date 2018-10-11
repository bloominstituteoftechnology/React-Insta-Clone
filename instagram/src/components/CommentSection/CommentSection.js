import React from "react";
import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: "",
      // user: localStorage.getItem("user"),
      user: "user",
      isLiked: false,
      heart: "far fa-heart"
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
      this.setState({
        // likes: ++this.props.likes,
        isLiked: true,
        heart: "fas fa-heart"
      });
    } else {
      this.setState({
        // likes: --this.props.likes,
        isLiked: false,
        heart: "far fa-heart"
      });
    }
  };

  render() {
    // console.log(this.state.comments);
    return (
      <div>
        <div className="comments-container">
          <div className="post-icons">
            <div>
              <i className={this.state.heart} onClick={this.likeHandler} />
              <i className="far fa-comment" />
              <i className="far fa-share-square" />
            </div>
            <i className="far fa-bookmark" />
          </div>
          <div className="like-count">{this.props.likes} likes</div>

          {this.state.comments.map(comment => {
            return (
              <div className="comment" key={Math.random()}>
                <strong>{comment.username}</strong> {comment.text}
              </div>
            );
          })}

          <div className="timestamp">{this.props.timestamp}</div>
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

export default CommentSection;
