import React from "react";
import "./postContainer.css";
import PropTypes from "prop-types";
import Comments from "../CommentSection/commentSection";
import comment from "../../icons/comment.png";
import like from "../../icons/heart_unfilled.png";
import liked from "../../icons/heart_filled.png";

import more from "../../icons/more.png";
export default class Post extends React.Component {
  state = {
    post: [],
    text: ""
  };
  updateCommentHandler = () => {
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
      }
    }));
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
  componentDidMount = () => {
    this.setState({
      post: this.props.data
    });
  };

  render() {
    let post = { ...this.state.post };
    return (
      <div>
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
              <img className="Icons" src={comment} />
              <img className="Icons" src={like} />
            </div>
            <p id="Likes">{post.likes} likes</p>
          </section>
          {this.MakeComments()}
          <p className="Time">{post.timestamp}</p>

          <div className="InputSection">
            <input
              className="CommentInput"
              type="text"
              placeholder="Add a comment..."
              value={this.state.text}
              onChange={this.commentTextHandler}
            />
            <img
              className="CommentButton"
              src={more}
              onClick={this.updateCommentHandler}
            />
          </div>
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
