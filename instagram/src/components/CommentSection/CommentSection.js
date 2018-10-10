import React, { Component } from "react";

// class CommentsContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newComment: "",
//       comments: this.props.comments
//     };
//   }

//   render() {
//     console.log(this.props.comments);
//     return (
//       <div className="comment-container">
//         <h3>{this.props.comments.username}</h3>
//         <p>{this.props.comments.text}</p>
//       </div>
//     );
//   }
// }

const CommentsContainer = props => {
  console.log(props.comments);
  return (
    <div className="comment-container">
      <h3>{props.comments.username}</h3>
      <p>{props.comments.text}</p>
    </div>
  );
};

export default CommentsContainer;
