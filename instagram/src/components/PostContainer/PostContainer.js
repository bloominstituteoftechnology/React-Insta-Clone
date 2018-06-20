import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import { Card, CardImg, CardBody,
  CardTitle, Button } from 'reactstrap';

  /*Need to come back and add prop types*/

const PostContainer = props => {
  return (
      <Card className="test">
        <CardBody className="card-header">
        <img className="thumb-image" src={props.post.thumbnailUrl} alt="" />
        <CardTitle className="username">{props.post.username}</CardTitle>
        </CardBody>
        <CardImg className="post-image" src={props.post.imageUrl} alt="" />
        <CardBody>
        <div className="post-buttons">
        <div className="left-buttons">
        <a className="like-button mx-2" onClick={props.toggleLike}><i className="far fa-heart"></i></a>
        {/*<i className="fas fa-heart like-selected"></i>*/}
        <i className="far fa-comment" ></i>
        </div>
        <i className="far fa-bookmark" onClick={props.toggleLike}></i>
        {/*<i class="fas fa-bookmark"></i>*/}
        </div>
        <h5 onClick={props.toggleLike}>{props.post.likes} likes</h5>
        <CommentSection comments={props.post.comments} />
        <h6>{props.post.timestamp}</h6>
        <hr/>
        <form onSubmit={props.addCommentHandler} value={props.index}>
        <input style={{width: 500 +'px'}} type="text" name="comment" placeholder="Add a comment..." value={props.value} onChange={props.commentChangeHandler} />
        </form>
        </CardBody>
      </Card>
  );
};

export default PostContainer;
