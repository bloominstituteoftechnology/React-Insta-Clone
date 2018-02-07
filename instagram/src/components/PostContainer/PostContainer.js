import React from 'react';
import { Panel, Image, Grid, Row, Col, Clearfix } from 'react-bootstrap';
import CommentSection from '../CommentSection/CommentSection.js'

const PostContainer = (props) => {
  const post = props.post;

  return (
    <Grid>
      <Row>
        <Col>
          <Image src={post.thumbnailUrl} alt={post.thumbnailUrl} responsive />
        </Col>
        <Col>
          <h3>{post.username}</h3>
        </Col>
      </Row>

      <Row>
        <Image src={post.imageUrl} alt={post.imageUrl} responsive />
      </Row>

      <Row>
        <Col>
          Likes: {post.likes}
        </Col>
        <Col>
          {post.timestamp}
        </Col>
      </Row>

      <CommentSection comments={post.comments} />
    </Grid>
  )
}

export default PostContainer;
