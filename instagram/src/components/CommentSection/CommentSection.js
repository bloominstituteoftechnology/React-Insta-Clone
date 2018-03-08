import React, { Component } from "react";
import "./CommentSection.css";
import { CardBody, CardText } from "reactstrap";

export default class CommentSection extends Component {
  render() {
    console.log("Comment Section Props", this.props);
    return (
      <CardBody>
        {this.props.comments.map(comment => {
          return (
            <CardText>
              <span className="font-weight-bold">{comment.username}</span>{" "}
              {comment.text}
            </CardText>
          );
        })}
      </CardBody>
    );
  }
}
