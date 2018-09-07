import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import PostHeader from "./PostHeader";
import styled, { css } from "styled-components";
import "./Posts.css";

const PostBorder = styled.div`
  border: 1px solid #d3d3d3;
  margin: 5px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;
const PostImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const PostImage = styled.div`
  width: 100%;
`;

const Post = props => {
  return (
    <PostBorder>
      <div className="post-border">
        <PostHeader
          username={props.post.username}
          thumbnailUrl={props.post.thumbnailUrl}
        />
        <PostImageWrapper>
          <div className="post-image-wrapper">
            <PostImage>
              <img
                alt="post thumbnail"
                className="post-image"
                src={props.post.imageUrl}
              />
            </PostImage>
          </div>
        </PostImageWrapper>
        <CommentSection
          likes={props.post.likes}
          id={props.post.imageUrl}
          comments={props.post.comments}
        />
      </div>
    </PostBorder>
  );
};

export default Post;
