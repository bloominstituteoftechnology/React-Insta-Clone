import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";
import * as Icon from "react-feather";
import styled from "styled-components";

//styled comps
const Post = styled.section`
  box-sizing: content-box;
  background: #f2eaeb;
  border: 1px solid #6b6b83;
  max-width: 640px;
  margin: 10px auto;
  border-radius: 2px;
  span {
    font-weight: bold;
  }
`;
const PostHead = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;
  .thumbnail {
    margin: 0 5px 0 15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
const InteractButtons = styled.div`
  width: 95%;
  margin: 0 auto;
  .like-button {
    margin-right: 15px;
  }
`;
const Likes = styled.div`
  display: block;
  width: 95%;
  margin: 0 auto;
  font-size: 14px;
  .num-likes {
    margin-right: 5px;
    color: #4da6cc;
  }
`;

function PostContainer(props) {
  return (
    <Post>
      <div className="post-content">
        <PostHead>
          <img className="thumbnail" src={props.post.thumbnailUrl} />
          <span>{props.post.username}</span>
        </PostHead>
        <img src={props.post.imageUrl} />
        <InteractButtons>
          <Icon.Heart className="like-button" />
          <Icon.MessageCircle className="msg-button" />
        </InteractButtons>
        <Likes>
          <span className="num-likes">{props.post.likes}</span>
          <span>likes</span>
        </Likes>
      </div>
      <CommentSection
        user={props.user}
        comments={props.post.comments}
        timestamp={props.post.timestamp}
      />
    </Post>
  );
}

export default PostContainer;
