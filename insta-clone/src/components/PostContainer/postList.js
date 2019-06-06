import React from "react";
import PropTypes from "prop-types";
import Comments from "../CommentSection/commentSection";
import comment from "../../icons/comment.png";
import Like from "../LikeSection/Like.js";
import more from "../../icons/more.png";
import { getUser } from "../withAuth/services";
import styled from "styled-components";

const PostContainer = styled.div`
  background-color: #ededed;
  border-radius: 5px;
  width: ${props => (props.searched ? "500px" : "0px")};
  max-height: ${props => (props.searched ? "900px" : "0px")};
  display: flex;
  flex-direction: column;
  margin: ${props => (props.searched ? "25px auto" : "0px")};
  visibility: ${props => (props.searched ? "visible" : "collapse")};
`;
const Running = styled.div`
  display: flex;
  flex-flow: ${props => (props.header ? "row" : "column")};
  height: ${props => (props.header ? "50px" : "auto")};
  margin-left: 10px;
  align-items: ${props => (props.header ? "center" : "flex-start")};
`;
const PostImage = styled.img`
  margin: ${props => (props.thumbnail ? "5px" : "0px")};
  align-self: ${props => (props.thumbnail ? "flex-start" : "center")};
  width: ${props => (props.thumbnail ? "25px" : "495px")};
  height: ${props => (props.thumbnail ? "25px" : "495px")};
  border-radius: ${props => (props.thumbnail ? "25px" : "0px")};
`;
const Icons = styled.div`
  display: flex;
`;
const Icon = styled.input`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
`;
const TimeStamp = styled.p`
  margin-left: 10px;
  font-size: 0.5rem;
`;
const Likes = styled.p`
  margin: 0px;
`;
const InputSection = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
`;
const CommentInput = styled.input`
  margin: 0px 10px;
  width: ${props => (props.button ? "25px" : "100%")};
  height: 25px;
  font-size: 1.5rem;
`;
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
        username: getUser().email,
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
      <PostContainer searched={this.state.search}>
        <Running header>
          <PostImage src={post.thumbnailUrl} thumbnail />
          <p id="username">{post.username}</p>
        </Running>
        <PostImage src={post.imageUrl} />
        <Running>
          <Icons>
            <Like cb={this.likeCallBack} />
            <Icon src={comment} type="image" />
          </Icons>
          <Likes>{post.likes} likes</Likes>
        </Running>
        {this.MakeComments()}
        <TimeStamp>{post.timestamp}</TimeStamp>
        <form onSubmit={this.updateCommentHandler}>
          <InputSection>
            <CommentInput
              type="text"
              placeholder="Add a comment..."
              value={this.state.text}
              onChange={this.commentTextHandler}
            />
            <CommentInput button src={more} type="image" value="Submit" />
          </InputSection>
        </form>
      </PostContainer>
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
