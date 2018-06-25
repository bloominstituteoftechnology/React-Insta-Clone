import React from "react";
import "./PostContainer.css";
import { Container, Row, Col } from "reactstrap";

const PostContainer = props => {
  return (
    <Container>
      <Row>
        <Col
          sm="12"
          md={{ size: 8, offset: 2 }}
          className="post-container-wrapper"
        >
          <span className="user">{props.posts[0].username}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default PostContainer;
