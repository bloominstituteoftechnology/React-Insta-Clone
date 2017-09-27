import React, { Component } from "react";
import "./PostComponent.css";
import { GetComments } from "./GetComment.js";
export default class PostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      comments: [],
      likes: 0,
      postLiked: false
    };
  }
  componentDidMount() {
    this.setState({
      post: this.props.post,
      comments: this.props.post.comments,
      likes: this.props.post.likes
    });
  }

  likePost = () => {
    if (this.state.postLiked === false) {
      this.setState({
        postLiked: true,
        likes: this.state.likes + 1
      });
    } else {
      this.setState({
        postLiked: false,
        likes: this.state.likes - 1
      });
    }
  };
  render() {
    let likedPost = this.state.postLiked ? "blue" : "white";
    return (
      <div className="Post-Component">
        <div className="username-thumbnail">
          <img
            className="thumbnail-img"
            src={this.state.post.thumbnailUrl}
            alt=""
          />
          <h4 className="username">{this.state.post.username}</h4>
        </div>
        <img className="Post-Image" src={this.state.post.imageUrl} alt="" />
        <p className="Like-Comment-block">
          <button
            style={{ backgroundColor: likedPost }}
            className="Like-Button"
            onClick={() => {
              this.likePost();
            }}
          >
            Like
          </button>
          <button className="Comment-Button">Comment</button>
        </p>
        <div className="Likes">
          <strong>{this.state.likes} likes</strong>
        </div>
        <GetComments comments={this.state.comments} />
        <input className="Comments-Textbox" placeholder="Add a comment..." />
      </div>
    );
  }
}
