import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import "./Post.css";
import PropTypes from "prop-types";
import moment from "moment";
import styled from "styled-components";

//Declare and style components

const PostBlock = styled.div`
  width: 80%;
  margin: 20px auto;
  border: 1px solid lightgray;
  box-shadow: 1px 1px 10px;
`;

const ImgThumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 5px;
`;

const Username = styled.p`
  font-size: 16px;
  margin-left: 10px;
  font-weight: bolder;
`;

const PostImg = styled.img`
  margin 1% 8%;
  width: 75%;
  height: 15%;
`;

class Post extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    // {
    //   let timestamp = this.props.post.timestamp;
    //   console.log(this.props.post.timestamp);
    //   let postDate = moment("now").fromNow();
    //   console.log(postDate);
    // }
    return (
      <PostBlock>
        <div className="username-container">
          <ImgThumbnail
            src={this.props.post.thumbnailUrl}
            alt="post thumbnail"
          />
          <Username>{this.props.post.username}</Username>
        </div>
        <PostImg src={this.props.post.imageUrl} alt="post image" />
        {/* <img
          className="post-image"
          src={this.props.post.imageUrl}
          alt="post image"
        /> */}
        <CommentSection comments={this.props.post.comments} />
      </PostBlock>
    );
  }
}

export default Post;
