import React, { Component } from "react";
import CommentsContainer from "../CommentSection/CommentSection";
import "./PostContainer.css";
import PropTypes from "prop-types";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.post.comments,
      newComment: ""
    };
    console.log(props.post.comments);
  }

  changeHandler = event => {
    console.log(" changehandler fired");
    this.setState({ newComment: event.target.value });
  };

  addNewComment = event => {
    console.log("add comment fired");
    event.preventDefault();
    const newComment = { username: "AdamHinkley", text: this.state.newComment };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, newComment: "" });
    console.log("add comment:", comments);
  };

  render() {
    return (
      <div className="post-container">
        <div className="post-top-section">
          <img className="thumbnail" src={this.props.post.thumbnailUrl} alt="thumbnail" />
          <p className="username">{this.props.post.username}</p>
        </div>
        <div>
          <img className="post-img" src={this.props.post.imageUrl} alt="post" />
        </div>
        <div>
          <img className="heart-plus" src={require("./img/insta_heart.png")} alt="heart" />
          <img className="heart-plus" src={require("./img/insta_plus.png")} alt="plus" />
        </div>
        <p className="likes">{this.props.post.likes} likes</p>

        {this.state.comments.map((comment, index) => {
          return <CommentsContainer comments={comment} key={index} />;
        })}
        <form onSubmit={this.addNewComment}>
          <input onChange={this.changeHandler} value={this.newComment} type="text" placeholder="add new comment" />
        </form>
      </div>
    );
  }
}

PostContainer.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;
