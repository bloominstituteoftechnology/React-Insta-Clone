import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Form
} from "reactstrap";
import CommentSection from "../CommentSection/CommentSection";
import moment from "moment";

class PostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments,
      newComment: {
        //NEW
        username: "A user",
        text: ""
      }
    };
  }
  addComment = event => {
    event.preventDefault();
    const comments = this.state.comments.slice();
    comments.push(this.state.newComment); //NEW
    this.setState({
      newComment: {
        //NEW
        username: "A user",
        text: ""
      },
      comments: comments
    });
    console.log("addComment invoked");
  };
  handleNewCommentInput = event => {
    this.setState({
      newComment: {
        //NEW
        username: "A user",
        text: event.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <img src={this.props.thumbnail} alt="" className="img-thumbnail" />

            <strong>{this.props.username}</strong>
          </CardHeader>
          <CardImg width="100%" src={this.props.image} alt="" />
          <CardBody>
            <CardTitle>
              <i className="far fa-heart" />
              <i className="far fa-comment" />
            </CardTitle>
            <CardSubtitle>
              <strong>{this.props.likes} likes</strong>
            </CardSubtitle>
            <CommentSection comments={this.state.comments} />
            {/* {this.state.comment.map(comment => (
              <div key={comment.username}>{comment.text}</div>
            ))} */}
            <CardSubtitle className="text-muted text-uppercase">
              {moment(
                this.props.timestamp,
                "MMMM Do YYYY, h:mm:ss a"
              ).fromNow()}
            </CardSubtitle>
            <Form onSubmit={this.addComment}>
              <InputGroup>
                <Input
                  type="text"
                  onChange={this.handleNewCommentInput}
                  placeholder="Add a comment..."
                  value={this.state.newComment.text} //NEW
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="fas fa-ellipsis-h" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default PostContainer;
