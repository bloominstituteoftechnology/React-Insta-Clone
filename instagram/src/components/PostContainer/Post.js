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
            className="imgThumb"
            src={props.post.thumbnailUrl}
            alt=""
          />
          <CardSubtitle className="cardSub">
            {props.post.username}
          </CardSubtitle>
        </Row>
      
      <CardImg className="PostImage" src={props.post.imageUrl} alt="" />
      
          <div>{props.post.likes} likes</div>

    
         { props.post.comments.map(comment => (
                <CommentSection comment={comment} />
              ))} 
          <div>{props.post.timestamp}</div>

     </CardBody>
    </Card>
  );
};

export default Post;