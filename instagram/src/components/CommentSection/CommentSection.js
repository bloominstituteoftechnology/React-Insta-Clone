import React, { Component } from "react";
import "./CommentSection.css";
import { CardSubtitle, CardText } from "reactstrap";

export default class CommentSection extends Component {
  render() {
    console.log("Comment Section Props", this.props);
    return (
      <div>
        {this.props.comments.map(comment => {
          return (
            <div>
              <CardSubtitle>{comment.username}</CardSubtitle>
              <CardText>{comment.text}</CardText>
            </div>
          );
        })}
      </div>
    );
  }
}
