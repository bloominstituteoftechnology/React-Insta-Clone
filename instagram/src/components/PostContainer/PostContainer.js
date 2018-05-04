import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';

class PostContainer extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <Card className="post-container">
        <nav className="navbar navbar-light">
          <a className="navbar-brand" href="#">
            <img src="/assets/brand/bootstrap-solid.svg" width="50" height="50" class="d-inline-block align-top" alt="logo" />
            USERNAME
            </a>
        </nav>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <div>
            <img className="float-left" src="./assets/like.png" alt="like" height="30" width="30" />
            <img className="float-left" src="./assets/comment.png" alt="comment" height="28" width="25" />
          </div>
          <div className="strong">
            373 likes
            </div>
          <CardText className="text-left"><span>UserName</span> </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default PostContainer;