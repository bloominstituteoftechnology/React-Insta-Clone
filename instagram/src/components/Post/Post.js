import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

const Post = props => {
  return (
    <div>
      <Card className="test">
        <CardBody className="card-header">
        <img className="thumb-image" src={props.thumbnail} alt="" />
        <CardTitle className="username">{props.username}</CardTitle>
        </CardBody>
        <CardImg className="post-image" src={props.image} alt="" />
        <CardBody>
        <h5>{props.likes} likes</h5>
        <CommentSection comments={props.comments} />
        <h6>{props.time}</h6>
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;
