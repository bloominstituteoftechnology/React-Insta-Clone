import React from "react";
import "./PostContainer.css";
import { Container, Row, Col } from "reactstrap";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = ({ post }) => {
  return (
    <Container>
      <Row>
        <Col
          sm="12"
          md={{ size: 8, offset: 2 }}
          className="post-container-wrapper"
        >
          <PostHeader
            thumbnailUrl={post.thumbnailUrl}
            username={post.username}
          />
          <PostImage postImage={post.imageUrl} />
          <CommentSection likes={post.likes} comments={post.comments} />
        </Col>
      </Row>
    </Container>
  );
};

export default PostContainer;
