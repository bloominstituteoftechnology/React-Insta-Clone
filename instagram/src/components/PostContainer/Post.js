import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "./LikeSection";
import moment from "moment";

const PostBorder = styled.div`
  border: 1px solid #d3d3d3;
  margin: 15px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;
const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const PostThumbWrapper = styled.div`
  height: 50px;
  width: 50px;
`;

const PostThumbImg = styled.img`
  height: 70%;
  border-radius: 50%;
  margin-top: 7px;
`;

const Username = styled.div`
  margin-left: 5px;
  font-weight: 700;
`;

const PostImgWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const PostImg = styled.img`
  width: 100%;
`
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes,
      dTime: ""
    };
  }

  componentDidMount = () => {
    let currentTime = moment();
    let tStamp = this.props.post.timestamp;
    tStamp = tStamp.replace("th", "");
    let tStamp2 = moment(tStamp);
    let displayTime = tStamp2.from(currentTime);
    this.setState({ dTime: displayTime });
  };

  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes: likes });
  };

  render() {
    return (
      <PostBorder>
        <PostHeader>
          <PostThumbWrapper>
            <PostThumbImg
              alt="post header"
              src={this.props.post.thumbnailUrl}
            />
          </PostThumbWrapper>
          <Username>{this.props.post.username}</Username>
        </PostHeader>
        <PostImgWrapper>
          <PostImg
            alt="post thumbnail"
            src={this.props.post.imageUrl}
          />
        </PostImgWrapper>
        <LikeSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
        />
        <CommentSection
          postId={this.props.post.imageUrl} // in order to use localStorage, need to pass an id
          comments={this.props.post.comments} // pass the comments array of objects
          dTime={this.state.dTime} // pass moment date delta
        />
      </PostBorder>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;
