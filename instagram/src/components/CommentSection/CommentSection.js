import React from "react";
import "./CommentSection.css";
import dummyData from "../../dummy-data";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: "",
      user: "dummyuser",
      isLiked: false,
      heart: "far fa-heart"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ comments: dummyData.map(data => data.comments) });
    }, 500);
  }

  newCommentHandler = (event, index) => {
    this.setState({ newComment: event.target.value });
    console.log(this.state.newComment);
  };

  likeHandler = () => {
    if (!this.state.isLiked) {
      this.setState({
        // likes: ++this.state.likes,
        isLiked: true,
        heart: "fas fa-heart"
      });
    } else {
      this.setState({
        // likes: --this.state.likes,
        isLiked: false,
        heart: "far fa-heart"
      });
    }
  };

  render() {
    console.log(this.state.comments);
    return (
      <div>
        <img className="post-img" src={this.props.image} alt="post" />
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
        </div>

        {this.props.comments.map(comment => {
          return (
            <div className="comment" key={Math.random()}>
              <strong>{comment.username}</strong> {comment.text}
            </div>
          );
        })}

        <div className="timestamp">{this.props.timestamp}</div>
        <div className="add-comment">
          <form onSubmit={this.props.addNewComment}>
            <input
              type="text"
              placeholder="Add a comment..."
              name={this.props.newComment}
              // value={}
              onChange={this.newCommentHandler}
            />
          </form>
          <i className="fas fa-ellipsis-h" />
        </div>
      </div>
    );
  }
}

export default CommentSection;
