import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  Row
} from 'reactstrap';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
  return (
    <Card>
      <CardBody>
        <Row>
          <img
            style={{ borderRadius: 90 }}
            className="img-thumbnail"
            src={props.post.thumbnailUrl}
            alt=""
          />
          <CardSubtitle className="cardSubtitle">
            {props.post.username}
          </CardSubtitle>
        </Row>
      </CardBody>
      <CardImg className="Post__image" src={props.post.imageUrl} alt="" />
      <CardBody>
        <CardText className="likes">
          <div>{props.post.likes} likes</div>
        </CardText>
        <CardText>
          {props.post
            ? props.post.comments.map(comment => (
                <CommentSection comment={comment} />
              ))
            : null}
        </CardText>
        <CardText className="timestamp">
          <div>{props.post.timestamp}</div>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Post;