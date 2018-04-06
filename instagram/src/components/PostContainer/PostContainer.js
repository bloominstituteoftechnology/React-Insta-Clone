import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardImg
} from 'reactstrap';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return <div className="postContainer">
        <Card>
          <CardHeader>
            <img src={props.post.thumbnailUrl} alt={props.post.username + ' profile image'} className="thumbnail" />
            <span>{props.post.username}</span>
          </CardHeader>
          <CardImg src={props.post.imageUrl} alt={props.post.username + 'post image'} />
          <CardBody>
            <div>
              <i className="far fa-heart fa-2x postLike" />
              <i className="far fa-comment fa-2x" />
            </div>
            <div>
              <p className="likesNumber">{`${props.post.likes} likes`}</p>
            </div>
          </CardBody>
          <CommentSection comments={props.post.comments} time={props.post.timestamp} />
        </Card>
      </div>; 
}

export default PostContainer;
