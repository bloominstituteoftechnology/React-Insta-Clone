import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnailUrl: props.post.thumbnailUrl,
      username: props.post.username,
      imageUrl: props.post.imageUrl,
      likes: props.post.likes,
      comments: props.post.comments,
      timestamp: props.post.timestamp,
      comment: ""
    }
  }

  handleCommentType(event) {
    this.setState({ comment: event.target.value });
  }

  handleNewComment() {
    let comments = this.state.comments.slice();
    comments.push({username: "Anonymous", text: this.state.comment});
    this.setState({"comment": '', "comments": comments});
  }

  render() {
    return (
      <div className="post-container">
        <Card>
          <CardBody>
              <CardTitle><img className="posterAvatar rounded-circle" src={this.state.thumbnailUrl} alt="user avatar" /> {this.state.username} </CardTitle>

          </CardBody>
          <CardImg width="100%" src={this.state.imageUrl} alt="posted image" />
          <CardBody>
            <CardText className="post-icons">☭ ♡</CardText>
            <CardText>{this.state.likes} Likes</CardText>
            <CommentSection comments={this.state.comments} />
            <CardText>{this.state.timestamp}</CardText>
          </CardBody>
          <InputGroup>
            <Input onChange={this.handleCommentType.bind(this)} value={this.state.comment} />
            <InputGroupAddon addonType="append">
            <InputGroupText onClick={this.handleNewComment.bind(this)} >Comment</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Card>

      </div>
    );
  }
}

export default PostContainer;
