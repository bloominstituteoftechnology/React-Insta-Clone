import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "./CommentSection.css"

const CommentSection = props => {
  return (
    <Row>
      <span className="comment-username">{props.comment.username}</span>
      <span className="comment-text">{props.comment.text}</span>
    </Row>
  );  
}


// class Comment extends Component {
//   constructor() {
//     super();
//     this.state = {
//       clicked: false
//     };
//   }

//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked });
//   };

//   render() {
//     return <div onClick={this.handleClick}>{this.props.thing}</div>;
//   }
// }

export default CommentSection;