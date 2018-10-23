import React from "react";
import PropTypes from "prop-types";
import Comments from "../CommentSection/Comments";
import CommentInput from "../CommentSection/CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    //recieves props from state on App.js
    super(props);
    this.state = {
      comments: props.comments, //gets comments from state as props
      comment: ""
    };
  }

  commentHandler = event => {
    this.setState({ comment: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault(); //prevent page refresh
    const newComment = { text: this.state.comment, username: "Tom Foolery" };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" }); //replaces state: select comments field and add to comments ES6
  }; //build out comment object, clone comments array, push to clone, set new clone as state

  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => (
          <Comments key={index} comment={comment} />
        ))}
        <CommentInput
          submitHandler={this.submitHandler}
          changeHandler={this.commentHandler}
          comment={this.state.comment}
        />
      </div>
    );
  }
}

export default CommentSection;

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

//when building out comments, insert <CommentInput /> after <Comments />
// import CommentInput from '.CommentInput';
