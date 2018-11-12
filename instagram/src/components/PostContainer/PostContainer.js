import React, { Component } from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThemeisle } from "@fortawesome/fontawesome-free-brands";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: props.post,
      comments: props.post.comments,
      inputText: ""
    };
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  addComment = ev => {
    ev.preventDefault();
    if (this.state.inputText === "") {
      return alert("Please write your todo item!");
    }
    this.setState({
      comments: [
        ...this.state.comments,
        {
          username: "holdenSucks",
          text: this.state.inputText
        }
      ],
      inputText: ""
    });
  };

  render() {
    return (
      <div className="post-container">
        <div className="post-header">
          <div className="thumbnail-container">
            <img
              src={this.state.post.thumbnailUrl}
              alt="profile thumbnail"
              className="header-thumbnail"
            />
          </div>
          <h2 className="bold">{this.state.post.username}</h2>
        </div>
        <img
          src={this.state.post.imageUrl}
          alt="full-size post"
          className="post-img"
        />
        <div className="lower-content">
          <div className="action-buttons">
            <FontAwesomeIcon
              icon={["far", "heart"]}
              size="2x"
              className="icon"
            />
            <FontAwesomeIcon
              className="icon"
              icon={["far", "comment"]}
              flip="horizontal"
              size="2x"
            />
          </div>
          <div className="likes">
            <p className="bold">{this.state.post.likes} likes</p>
          </div>
          <CommentSection
            comments={this.state.comments}
            time={this.state.post.timestamp}
            inputText={this.state.inputText}
            handleChange={this.handleChange}
            addComment={this.addComment}
          />
        </div>
      </div>
    );
  }
}

// const PostContainer = props => {
//   return (
//     <div className="post-container">
//       <div className="post-header">
//         <div className="thumbnail-container">
//           <img
//             src={props.post.thumbnailUrl}
//             alt="profile thumbnail"
//             className="header-thumbnail"
//           />
//         </div>
//         <h2 className="bold">{props.post.username}</h2>
//       </div>
//       <img
//         src={props.post.imageUrl}
//         alt="full-size post"
//         className="post-img"
//       />
//       <div className="lower-content">
//         <div className="action-buttons">
//           <FontAwesomeIcon icon={["far", "heart"]} size="2x" className="icon" />
//           <FontAwesomeIcon
//             className="icon"
//             icon={["far", "comment"]}
//             flip="horizontal"
//             size="2x"
//           />
//         </div>
//         <div className="likes">
//           <p className="bold">{props.post.likes} likes</p>
//         </div>
//         <CommentSection
//           comments={props.post.comments}
//           time={props.post.timestamp}
//           handleChange={props.handleChange}
//           comment={props.comment}
//         />
//       </div>
//     </div>
//   );
// };

export default PostContainer;
