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
  Form,
  Button
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
        username: "user",
        text: ""
      }
    };
  }

  addNewComment = event => {
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
  };
  handleNewCommentInput = event => {
    this.setState({
      newComment: {
        //NEW
        username: "user",
        text: event.target.value
      }
    });
  };

  componentDidMount() {}

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
              <Button color="link">
                <i className="far fa-heart" />
              </Button>

              <i className="far fa-comment" />
            </CardTitle>
            <CardSubtitle>
              <strong>{this.props.likes} likes</strong>
            </CardSubtitle>
            <CommentSection comments={this.state.comments} />
            <CardSubtitle className="text-muted text-uppercase">
              {moment(
                this.props.timestamp,
                "MMMM Do YYYY, h:mm:ss a"
              ).fromNow()}
            </CardSubtitle>
            <Form onSubmit={this.addNewComment}>
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
