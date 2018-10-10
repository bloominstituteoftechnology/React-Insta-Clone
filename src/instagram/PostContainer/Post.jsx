import React, { Component } from "react";
import PropTypes from "prop-types";
import Comments from "../CommentSection/Comments";
import LikeSection from "./LikeSection";
import "./PostContainer.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  addLikes = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render() {
    const nickname = this.props.post.nickname;
    const avatar = this.props.post.avatar;
    const image = this.props.post.image;
    const caption = this.props.post.caption;
    const likes = this.props.post.likes;

    return (
      <section className="Post" ref="Post">
        <header>
          <div className="Post-head">
            <div className="Post-head-avatar">
              <img src={avatar} alt={nickname} />
            </div>
            <div className="Post-nickname">
              <span>{nickname}</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img alt={caption} src={image} />
          </div>
        </div>
        <section className="Post-icons">
          <div className="left-icons">
            <div className="Post-icon-heart" />
            <div className="Post-icon-comment" />
            <div className="Post-icon-share" />
          </div>
          <div className="right-icons">
            <div className="Post-icon-save" />
          </div>
        </section>
        <section className="Post-likes">
          <LikeSection
            incrementLike={this.incrementLike}
            likes={this.state.likes}
          />
        </section>

        <Comments
          postId={this.props.post.image}
          comments={this.props.post.comments}
        />
      </section>
    );
  }
}
export default Post;
