import React from 'react';
import '../PostContainer/PostContainer.css';
import CommentSection from "../CommentSection/CommentSection.js"
import {Card, CardBody, CardImg, CardTitle, CardText} from "reactstrap";

const PostContainer = props => {
  return(
    <div className="postcontainer">
      <Card>
        <CardBody>
          <img className="thumbnail" src={props.feed.thumbnailUrl} alt="User thumbnail"/>
          <CardTitle>{props.feed.username}</CardTitle>
          <CardImg className="post-image" src={props.feed.imageUrl} alt={props.feed.username}/>
        </CardBody>
        <CardBody>
          <i className="far fa-heart"></i>
          <i className="far fa-comment"></i>
          <CardText>{props.feed.likes} likes</CardText>
          <CommentSection comments={props.feed.comments}/>
          <CardText>{props.feed.timestamp}</CardText>
          <input type="text" placeholder="Add a comment..."/>
        </CardBody>
      </Card>
    </div>
  )
}

export default PostContainer;