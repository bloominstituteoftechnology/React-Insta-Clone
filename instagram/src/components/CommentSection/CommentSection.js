import React, { Component } from "react";
import "./CommentSection.css";
import { CardBody, CardSubtitle, CardText } from "reactstrap";

export default class CommentSection extends Component {
  render() {
    console.log("Comment Section Props", this.props);
    return (
      <CardBody>
        {this.props.comments.map(comment => {
          return (
            <CardText>
              {comment.username} {comment.text}
            </CardText>
          );
        })}
      </CardBody>
    );
  }
}
