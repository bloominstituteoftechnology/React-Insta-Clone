import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

const PostContainer = (props) => {
  console.log(props.post.username);
  return (
    <div>
      <Card>
        <CardBody>
            <CardTitle><img className="posterAvatar rounded-circle" src={props.post.thumbnailUrl} alt="user avatar" /> {props.post.username} </CardTitle>

        </CardBody>
        <CardImg width="100%" src={props.post.imageUrl} alt="posted image" />
        <CardBody>
          <p className="post-icons">☭ ♡</p>
          <CommentSection />
        </CardBody>
      </Card>

    </div>
  );
}

export default PostContainer;
