import React from "react";
import "./PostContainer.css";
import { Container, Row, Col } from "reactstrap";
import PostHeader from "./PostHeader";

const PostContainer = props => {
  return (
    <Container>
      <Row>
        <Col
          sm="12"
          md={{ size: 8, offset: 2 }}
          className="post-container-wrapper"
        >
          <img src={props.posts[0].thumbnailUrl} alt="" />
          <PostHeader />
        </Col>
      </Row>
    </Container>
  );
};

export default PostContainer;
