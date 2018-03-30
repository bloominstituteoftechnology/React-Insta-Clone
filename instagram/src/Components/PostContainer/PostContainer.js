import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import './PostContainer.css';

const PostContainer = (props) => {
  const {
    username,
    thumbnailUrl,
    imageUrl,
    likes,
    timestamp,
    comments
  } = props.post;

  return (

    <div>
      <Card>
        <img src={thumbnailUrl} className="profile" alt="avatar"/>
        <CardBody>
          <CardTitle>{username}</CardTitle>
          <img src={imageUrl} className="content" alt="post"/>
          <CardText>
            {likes}
            <br/> {comments.map((chatter, i) => <CommentSection key={i} chatter={chatter}/>)}
          </CardText>
        </CardBody>
        {timestamp}
      </Card>
    </div>
  )
}

export default PostContainer;