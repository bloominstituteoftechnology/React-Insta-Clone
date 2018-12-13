import React from 'react';
import {Card, CardImg, CardBody} from 'reactstrap';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {
  return (
    <div>
      <div>
        <img src={props.data.thumbnailUrl}/>
        <div>{props.data.username}</div>
      </div>
      <Card className='card'>
        <CardImg src={props.data.imageUrl} />
        <CardBody>
          <div>{props.data.likes}</div>
          <div>{props.data.timestamp}</div>
          {props.data.comments.map(data => <CommentSection data={data} />)}
        </CardBody>
      </Card>
    </div>
  );
};

export default PostContainer;
