import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Post.css";
import CommentSection from "../CommentSection/CommentSection";
import LikesContainer from "./LikesContainer";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.post.comments,
      commentText: "",
      likes: props.post.likes,
      liked: false,
      id: props.id
    };
  }

  handleComment = ev => {
    this.setState({
      commentText: ev.target.value
    });
  };

  addComment = ev => {
    ev.preventDefault();
    let metaData = this.state.comments;
    metaData.push({ username: "tommaay", text: this.state.commentText });
    this.setState({
      comments: metaData,
      commentText: ""
    });
  };

  addLike = ev => {
    ev.preventDefault();
    let likes = this.state.likes;
    let heartIcon = document.querySelectorAll(".likes-container .heart");
    heartIcon = Array.from(heartIcon);

    this.setState(state => {
      if (this.state.liked === false)
        return {
          likes: likes + 1,
          liked: true
        };
      else
        return {
          likes: likes - 1,
          liked: false
        };
    });

    if (this.state.liked === false) {
      heartIcon[this.state.id].classList.remove("fa-heart-o");
      heartIcon[this.state.id].classList.add("fa-heart");
      heartIcon[this.state.id].style.color = "red";
    } else {
      heartIcon[this.state.id].classList.remove("fa-heart");
      heartIcon[this.state.id].classList.add("fa-heart-o");
      heartIcon[this.state.id].style.color = "black";
    }
  };

  render() {
    return (
      <div className="post-container">
        <div className="insta-user">
          <img
            src={this.props.post.thumbnailUrl}
            alt="User Thumbnail"
            className="icon"
          />
          <h2>{this.props.post.username}</h2>
        </div>

        <div className="post-img">
          <img src={this.props.post.imageUrl} alt="Post Image" />
        </div>

        <LikesContainer likes={this.state.likes} addLike={this.addLike} />

        <div className="comments-container">
          {this.state.comments.map((comment, idx) => (
            <CommentSection key={idx} index={idx} comment={comment} />
          ))}

          <p className="light-font">{this.props.post.timestamp}</p>

          <form className="add-comment" onSubmit={this.addComment}>
            <input
              type="text"
              placeholder="Add a comment..."
              value={this.state.commentText}
              onChange={this.handleComment}
            />
            <div className="triple-dot">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    comments: PropTypes.array,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    username: PropTypes.string
  })
};

export default PostContainer;
