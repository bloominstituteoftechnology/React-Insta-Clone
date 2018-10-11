import React from "react";
import Comments from "./comments";
import CommentForm from "./commentForm";
import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allComments: props.comments,

      comment: ""
    };
    console.log(this.state);
  }

  addNewComment = event => {
    event.preventDefault();
    const allComments = this.state.allComments.slice();
    allComments.push({ username: "bg1234", text: this.state.comment });
    this.setState({ allComments, comment: "" });
  };

  changeHandler = event => {
    this.setState({ comment: event.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.allComments.map((comment, index) => (
          <Comments key={index} comments={comment} />
        ))}

        <CommentForm
          newComment={this.state.comment}
          handleAddNewComment={this.addNewComment}
          handleChangeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

export default CommentSection;
