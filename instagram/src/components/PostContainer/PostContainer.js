import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
  return (
    <div className="text-left" style={{width: "520px", margin: "8px auto"}}>
      <Card>
        <CardBody>
          <CardTitle>
            <img className="mr-1" src={props.post.thumbnailUrl} width="30" />
            {props.post.username}
          </CardTitle>
        </CardBody>
        <img src={props.post.imageUrl} width="100%"/>
        <CardBody>
          <CardText>
            <span><strong>{props.post.likes} likes</strong></span>
            <CommentSection comments={props.post.comments} time={props.post.timestamp}/>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default PostContainer;
