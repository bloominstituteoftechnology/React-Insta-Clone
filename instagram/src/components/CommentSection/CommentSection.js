import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./commentSection.css"

class CommentSection extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="comments">
        {this.props.comments.map(function(user, index) {
          return (
            <div key={index}>
              <CardText><strong>{user.username} </strong>{user.text}</CardText>
            </div>
            )
        })}
      </div>
    )
  }
}

export default CommentSection;