import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

const PostContainer = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
            <CardTitle><img className="posterAvatar rounded-circle" src={props.post.thumbnailUrl} alt="user avatar" /> {props.post.username} </CardTitle>

        </CardBody>
        <CardImg width="100%" src={props.post.imageUrl} alt="posted image" />
        <CardBody>
          <CardText className="post-icons">☭ ♡</CardText>
          <CardText>{props.post.likes} Likes</CardText>
          <CommentSection />
        </CardBody>
      </Card>

    </div>
  );
}

export default PostContainer;
