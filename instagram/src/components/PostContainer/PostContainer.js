import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";
import CommentButton from "./CommentButton";
import LikeButton from "../SearchBar/LikeButton";
import PropTypes from "prop-types";
import styled from "styled-components";

const PostBody = styled.div`
  .profilePick {
    border-radius: 50%;
    height: 40px;
  }

  .profileHead {
    display: flex;
    margin: 10px 0px 0px 10px;
  }

  .profileHead h2 {
    margin: 0px 0px 20px 10px;
  }

  .postImg {
    width: 100%;
  }

  .postCasing {
    margin-left: 20px;
    border: 1px solid lightgrey;
  }

  .commentButt {
    height: 40px;
    margin: 0px;
  }

  .postIcons {
    display: flex;
    margin: 5px 0px 5px 20px;
  }

  .postIcons .Like-Button {
    margin: 5px 0px;
    height: 27px;
  }

  .likeContainer {
    display: flex;
    margin: 0px 0px 0px 20px;
  }

  .likeContainer h3 {
    margin: 0px;
  }

  .postBodyImg {
    width: 100%;
  }

  .buttonContainer {
    display: flex;
    margin-left: 20px;
  }
`;

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      likes: props.post.likes
    };
  }

  addLike = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  render() {
    return (
      <PostBody>
        <div className="postCasing">
          <div className="profileHead">
            <img
              className="profilePick"
              alt="''"
              src={this.props.post.thumbnailUrl}
            />
            <h2>{this.props.post.username}</h2>
          </div>

          <div>
            <img
              className="postBodyImg"
              alt="''"
              src={this.props.post.imageUrl}
            />
          </div>

          <div className="buttonContainer">
            <LikeButton addLike={this.addLike} />
            <CommentButton />
          </div>

          <div className="likeContainer">
            <h3>{this.state.likes} Likes</h3>
          </div>
          <CommentSection
            comments={this.props.post.comments}
            timestring={this.props.post.timestamp}
          />
        </div>
      </PostBody>
    );
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.string,
    text: PropTypes.string
  })
}.isRequired;

export default PostContainer;
