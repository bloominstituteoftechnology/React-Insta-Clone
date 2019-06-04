import React from "react";
import "./postContainer.css";
import PropTypes from "prop-types";
import Comments from "../CommentSection/commentSection";
import comment from "../../icons/comment.png";
import Like from "../LikeSection/Like.js";
import more from "../../icons/more.png";
export default class Post extends React.Component {
  state = {
    post: [],
    text: "",
    search: true
  };
  updateCommentHandler = event => {
    event.preventDefault();
    if (this.state.text.trim().length !== 0) {
      let post = { ...this.state.post };
      //Make New Comment
      let comment = {
        id: Date.now(),
        username: post.username,
        text: this.state.text
      };
      //setState of comments
      this.setState(prevState => ({
        post: {
          ...prevState.post,
          comments: [...post.comments, comment]
        },
        text: ""
      }));
    }
  };
  likeCallBack = bool => {
    if (bool) {
      this.setState(prevState => ({
        post: {
          ...prevState.post,
          likes: this.state.post.likes + 1
        }
      }));
    } else {
      this.setState(prevState => ({
        post: {
          ...prevState.post,
          likes: this.state.post.likes - 1
        }
      }));
    }
  };
  MakeComments = () => {
    if (this.state.post.comments) {
      return <Comments comments={this.state.post.comments} />;
    }
  };
  commentTextHandler = e => {
    this.setState({
      text: e.target.value
    });
  };
  searchHandler = () => {
    if (this.props.filter.trim().length !== 0) {
      if (!this.state.post.username.includes(this.props.filter)) {
        if (this.state.search) {
          this.setState({
            search: false
          });
        }
      }
      if (this.state.post.username.includes(this.props.filter)) {
        if (!this.state.search) {
          this.setState({
            search: true
          });
        }
      }
    } else {
      if (!this.state.search) {
        this.setState({
          search: true
        });
      }
    }
  };
  componentDidMount = () => {
    this.setState({
      post: this.props.data
    });
  };
  componentDidUpdate = () => {
    this.searchHandler();
  };

  render() {
    let post = { ...this.state.post };

    return (
      <div className={this.state.search === true ? "Searched" : "nSearched"}>
        <div
          className="Post"
          key={post.id}
          username={post.username}
          likes={post.likes}
        >
          <section className="PostHeader">
            <img
              className="PostThumb"
              src={post.thumbnailUrl}
              alt="thumbnail"
            />
            <p id="username">{post.username}</p>
          </section>
          <img className="PostImage" src={post.imageUrl} alt="imagePost" />
          <section className="PostFooter">
            <div className="PostIcons">
              <Like cb={this.likeCallBack} />
              <input className="Icons" src={comment} type="image" />
            </div>
            <p id="Likes">{post.likes} likes</p>
          </section>
          {this.MakeComments()}
          <p className="Time">{post.timestamp}</p>
          <form onSubmit={this.updateCommentHandler}>
            <div className="InputSection">
              <input
                className="CommentInput"
                type="text"
                placeholder="Add a comment..."
                value={this.state.text}
                onChange={this.commentTextHandler}
              />
              <input
                className="CommentButton"
                src={more}
                type="image"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
  })
};
