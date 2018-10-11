import React, { Component } from "react";
import CommentsContainer from "../CommentSection/CommentSection";
import "./PostContainer.css";
import PropTypes from "prop-types";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.filteredPosts.comments,
      newComment: ""
    };
    console.log(props.filteredPosts.comments);
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
    console.log(this.props.filteredPosts.imageUrl);
    return (
      <div className="post-container">
        <div className="post-top-section">
          <img className="thumbnail" src={this.props.filteredPosts.thumbnailUrl} alt="thumbnail" />
          <p className="username">{this.props.filteredPosts.username}</p>
        </div>
        <div>
          <img className="post-img" src={this.props.filteredPosts.imageUrl} alt="post" />
        </div>
        <div>
          <img className="heart-plus" src={require("./img/insta_heart.png")} alt="heart" />
          <img className="heart-plus" src={require("./img/insta_plus.png")} alt="plus" />
        </div>
        <p className="likes">{this.props.filteredPosts.likes} likes</p>

        {this.state.comments.map((comment, index) => {
          return <CommentsContainer comments={comment} key={index} />;
        })}
        <form onSubmit={this.addNewComment}>
          <input onChange={this.changeHandler} type="text" placeholder="add new comment" />
        </form>
      </div>
    );
  }
}

PostContainer.propTypes = {
  filteredPosts: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.array
  })
};

export default PostContainer;
