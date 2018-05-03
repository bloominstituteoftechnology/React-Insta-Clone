import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

const PostContainer = (props) => {
  return (
    <div className="post-container">
      <Card>
        <CardBody>
            <CardTitle><img className="posterAvatar rounded-circle" src={props.post.thumbnailUrl} alt="user avatar" /> {props.post.username} </CardTitle>

        </CardBody>
        <CardImg width="100%" src={props.post.imageUrl} alt="posted image" />
        <CardBody>
          <CardText className="post-icons">☭ ♡</CardText>
          <CardText>{props.post.likes} Likes</CardText>
          <CommentSection comments={props.post.comments} />
          <CardText>{props.post.timestamp}</CardText>
        </CardBody>
        <InputGroup>
          <Input />
          <InputGroupAddon addonType="append">
          <InputGroupText>Comment</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Card>

    </div>
  );
}

export default PostContainer;
