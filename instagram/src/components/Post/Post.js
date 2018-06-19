import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

const Post = props => {
  return (
      <Card className="test">
        <CardBody className="card-header">
        <img className="thumb-image" src={props.post.thumbnailUrl} alt="" />
        <CardTitle className="username">{props.post.username}</CardTitle>
        </CardBody>
        <CardImg className="post-image" src={props.post.imageUrl} alt="" />
        <CardBody>
        <h5>{props.post.likes} likes</h5>
        <CommentSection comments={props.post.comments} />
        <h6>{props.post.timestamp}</h6>
        <hr/>
        <input type="text" name="comment" placeholder="Add a comment..." value={props.value} onChange={props.addCommentHandler}/>
        </CardBody>
      </Card>
  );
};

export default Post;
