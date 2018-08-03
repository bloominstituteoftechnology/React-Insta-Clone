import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import CommentInput from "../CommentSection/CommentInput";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comment,
            newComment: ""
        };
    }

    addNewComment = (event) => {
      this.setState({ newComment: event.target.value });
    }

    commentSubmit = (event) => {
        event.preventDefault();
        const newPost = { text: this.state.newComment, username: "khoaNguyen" };
        const newComments = this.state.comments.slice();
        console.log(newPost);
        newComments.push(newPost);
        this.setState({ comments: newComments, newComment: "" });
    }

   render() {
    return (
      <div className="App-intro">
        <p>
          <img src={this.props.thumb} className="thumbnail" />
          <span id="thumb-user">{this.props.user}</span>
        </p>
        <img src={this.props.pic} className="image" />
        <div className="buttons">
          <img src={require("../../img/ig_like.png")} alt="like button" />
          <span>
            <img
              src={require("../../img/ig_comment.png")}
              alt="comment button"
            />
          </span>
        </div>
        <p>{this.props.like} likes</p>
        <CommentSection comment={this.state.comments} />
        <p>{this.props.time}</p>
        <CommentInput 
            commentSubmit={this.commentSubmit}
            addNewComment={this.addNewComment}
            newValue={this.state.newComment}
        />
      </div>
    );
  }
}

export default Post;
