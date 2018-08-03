import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import CommentInput from "../CommentSection/CommentInput";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comment
        };
    }

    // componentDidMount() {
    //   this.setState({ comments: this.props.comment} )
    // }

    commentSubmit(event, newInput){
        event.preventDefault();
        const newComment = { text: newInput, username: "khoaNguyen" };
        const newComments = this.state.comments.slice();
        newComments.push(newComment);
        this.setState({ comments: newComments });
    }

   render() {
     console.log(this.state.comments);
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
        />
      </div>
    );
  }
}

export default Post;
