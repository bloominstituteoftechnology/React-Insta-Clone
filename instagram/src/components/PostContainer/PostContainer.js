import React from 'react';
import {Card, CardImg, CardBody, Media} from 'reactstrap';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {
  return (
    <div>
      <Card className='card'>
        <Media>
          <Media className='img-thumbnail' src={props.data.thumbnailUrl}/>
          <div className='username'>{props.data.username}</div>
        </Media>
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
