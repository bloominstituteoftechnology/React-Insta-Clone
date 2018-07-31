import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostTop from './PostTop';
import './PostContainer.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';

const PostBody = props => {
  return (
    <Card className="col">
      <CardBody>
      <PostTop  username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />
      <div className="pbody">
        <img alt="thumbnail"  className="pimage"  src={props.post.imageUrl} />
      </div>
      <CommentSection comments={props.post.comments} />
    </CardBody>
    </Card>
  );
};

export default PostBody;
