import React from 'react';
import { Panel, Image,Thumbnail, Grid, Row, Col, Clearfix, Well } from 'react-bootstrap';
import CommentSection from '../CommentSection/CommentSection.js'

const PostContainer = (props) => {
  const post = props.post;

  return (
    <Grid>
      <br />
      <Row>
        <Col>
          <img src={post.thumbnailUrl} width="64" height="64" alt="Nope" />
        </Col>
        <Col>
          <h3>&nbsp; {post.username}</h3>
        </Col>
      </Row>

      <Row>
        <Image src={post.imageUrl} alt="Nope" responsive />
      </Row>

      <Row>
        <Col>
          <strong>Likes:</strong> {post.likes}
        </Col>
        <Col>
          &nbsp; <strong>Posted:</strong> {post.timestamp}
        </Col>
      </Row>
      <Panel>
          <Well><CommentSection comments={post.comments} /></Well>
        <br />
      </Panel>
    </Grid>
  )
}

export default PostContainer;
