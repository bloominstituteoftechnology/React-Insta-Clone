import React, { Component } from "react";
import styled from "styled-components";
import CommentSection from "../CommentSection/CommentSection";
import HeartIcon from "../../assets/heart-icon.png";

const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid lightgray;
  width: 100%;
  margin-bottom: 20px;
`;

const Username = styled.div`
  font-weight: 700;
  width: 80%;
  margin-top: 23px;
  padding-right: 1%;
`;

const Avatar = styled.img`
  border-radius: 100%;
  width: 4%;
  height: 4%;
  margin: 20px 1.5% 3% 3%;
`;

const ImageContent = styled.img`
  width: 100%;
`;

const Likes = styled.div`
  margin: 10px 0 0 2%;
  font-weight: 700;
  padding-right: 1%;
`;

const LikeIcon = styled.img`
  width: 6%;
  height: 30px;
  padding-top: 5px;
`;

const CommentContainer = styled.div`
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: 95%;
  margin-left: 2%;
`;

const CommentInput = styled.input`
  border: 1px solid white;
  padding: 10px 0 20px 20px;
  font-size: 0.9rem;
  color: gray;
`;

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.post.comments,
      newComment: "",
      likes: 0
    };
  }

  addNewComment = e => {
    e.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        { text: this.state.newComment, username: "Person" }
      ]
    });
  };

  handleChange = event => {
    this.setState({
      newComment: event.target.value
    });
  };

  addLikes = event => {
    event.preventDefault();
    this.setState({
      likes: this.state.likes + 1
    });
  };

  render() {
    return (
      <PostWrapper>
        <Avatar src={this.props.post.thumbnailUrl} />
        <Username>{this.props.post.username}</Username>
        <ImageContent src={this.props.post.imageUrl} />
        <Likes>{this.state.likes} likes</Likes>
        <LikeIcon onClick={this.addLikes} src={HeartIcon} alt="Heart Icon" />
        <CommentContainer>
          {this.state.comments.map((comment, i) => (
            <CommentSection comment={comment} key={i} text={comment.text} />
          ))}
        </CommentContainer>

        <form onSubmit={this.addNewComment}>
          <CommentInput
            onChange={this.handleChange}
            type="text"
            placeholder="Add a comment..."
            name="newComment"
          />
          <button>Submit</button>
        </form>
      </PostWrapper>
    );
  };
};

export default Post;
