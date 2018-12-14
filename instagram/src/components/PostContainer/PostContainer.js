import React from 'react';
import {Card, CardImg, CardBody, Media} from 'reactstrap';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import heart from './img/icons8-heart-50.png';
import bubble from './img/icons8-speech-bubble-50.png';

const PostContainer = props => {
  return (
    <div>
      <Card className='card'>
        <Media>
          <Media className='img-thumbnail' src={props.data.thumbnailUrl}/>
          <div className='username'>{props.data.username}</div>
        </Media>
        <CardImg src={props.data.imageUrl} />
        <CardBody className='btm-border'>
          <div className='like-message-icons'>
            <div>
              <img src={heart} height='32px' width='32px'/>
              <img src={bubble} height='32px' width='32px'/>
            </div>
            <div>{props.data.likes} likes</div>
          </div>
          {props.data.comments.map(data => <CommentSection data={data} />)}
          <div>{props.data.timestamp}</div>
        </CardBody>
        <input className='comment' placeholder='Add a comment...' />
      </Card>
    </div>
  );
};

export default PostContainer;
