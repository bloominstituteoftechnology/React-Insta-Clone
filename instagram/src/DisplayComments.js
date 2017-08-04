import React, { Component } from 'react';
import './PostContainer.css';

const DisplayComments = (props) => {
  let comments;
  if (props.comments.length > 0) {
    comments = props.comments.map((reply, i) => {
      if (i > props.comments.length - 4) {
          return (
            <div className="Post-Comment" key={i}>
              <span>{reply.username}</span>{reply.text}
            </div>
          );
      }
    });
  } else {
    comments = <div class="No-Comments">Be the first to comment!</div>
  }
  return (
    <div>{comments}</div>
  );
};

export default DisplayComments;

// export default class DisplayComments extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }
//     componentDidMount() {
//         console.log('DisplayComments ready to go');
//     }

//     render() {
//         if (this.props.post.comments) {
//             const postcomments = this.props.post.comments.map((comment, i) => {
//                 return (
//                     <div className="Post-Comment" key={i}>
//                         <div className="Comment-Username">{comment.username}</div>
//                         <div className="Comment-Text">{comment.text}</div>
//                     </div>
//                 );
//             });
//         } else {
//             return (
//                 <div>Be the first to leave a comment!</div>
//             );
//         }
//     }
// }
