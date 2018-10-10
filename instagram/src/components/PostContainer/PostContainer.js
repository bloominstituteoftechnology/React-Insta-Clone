import React, { Component } from "react";
import CommentsContainer from "../CommentSection/CommentSection";
import "./PostContainer.css";
import PropTypes from "prop-types";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: ""
    };
  }

  render() {
    return (
      <div className="post-container">
        <div className="post-top-section">
          <img className="thumbnail" src={this.props.post.thumbnailUrl} alt="thumbnail" />
          <p className="username">{this.props.post.username}</p>
        </div>
        <div>
          <img className="post-img" src={this.props.post.imageUrl} alt="post" />
        </div>
        <div>
          <img className="heart-plus" src={require("./img/insta_heart.png")} alt="heart" />
          <img className="heart-plus" src={require("./img/insta_plus.png")} alt="plus" />
        </div>
        <p className="likes">{this.props.post.likes} likes</p>

        {this.props.post.comments.map((comment, index) => {
          return <CommentsContainer comments={comment} key={index} />;
        })}
        <form>
          <input type="text" placeholder="add new comment" />
        </form>
      </div>
    );
  }
}

// const Container = props => {
//   // console.log(props.post.comments);
//   return (
//     <div className="post-container">
//       <div className="post-top-section">
//         <img className="thumbnail" src={props.post.thumbnailUrl} alt="thumbnail" />
//         <p className="username">{props.post.username}</p>
//       </div>
//       <div>
//         <img className="post-img" src={props.post.imageUrl} alt="post" />
//       </div>
//       <div>
//         <img className="heart-plus" src={require("./img/insta_heart.png")} alt="heart" />
//         <img className="heart-plus" src={require("./img/insta_plus.png")} alt="plus" />
//       </div>
//       <p className="likes">{props.post.likes} likes</p>

//       {props.post.comments.map((comment, index) => {
//         return <CommentsContainer comments={comment} key={index} />;
//       })}
//       <form>
//         <input type="text" placeholder="add new comment" />
//       </form>
//     </div>
//   );
// };

PostContainer.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;
