import React from "react";
import PropTypes from 'prop-types';
// import "./PostContainer.css";
import CommentSection from "../CommentSection/commentsection";
import PostLikes from "./PostLikes";
import {
  PostWrapper,
  PostHeader,
  ProfileImg,
  UserName,
  LargeImgPostWrapper,
  IconsLikesComments
} from "./PostSyles.js";




const Post = props => {
  return (
    <PostWrapper>
      <PostHeader>
        <ProfileImg src={props.post.thumbnailUrl} alt="user profile" />
        <UserName>{props.post.username}</UserName>
      </PostHeader>
      <LargeImgPostWrapper>
        <img className="large-img-post" src={props.post.imageUrl} />
      </LargeImgPostWrapper>
      <IconsLikesComments>
        <div className="likes">
          <PostLikes likes={props.post.likes} />
        </div>
        <div className="comment-section">
          <CommentSection comments={props.post.comments} />
        </div>
      </IconsLikesComments>
    </PostWrapper>
  );
};

Post.propTypes ={
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};




export default Post;
