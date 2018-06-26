import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments, // This brings in only the comments from dummy data
      comment: "" // this is a new state where we will push our new comments into
    };
  }

  commentHandler = event => {
    // This is an event hander. This will handle the input of the comment.
    this.setState({ comment: event.target.value }); // Here we will update state of comment and not comments.
  };

  addComment = event => {
    // Here we update the state of comment
    event.preventDefault(); // This prevents the page from reloading thus loosing the input data.
    const newComment = { text: this.state.comment, username: "dchamorro" }; // Hew we create a const to hold our new comment as well as set the username default.
    const comments = this.state.comments.slice(); // this will make a copy of the comments array
    comments.push(newComment); // Now we push the newComment into our newly created comments array.
    this.setState({ comments, comment: "" }); // Finally we set the state.
  };

  render() {
    const { likes } = this.props; // We are deconstructing the props here. This way we dont have to always call props.
    const { comments } = this.state;
    return (
      <div>
        <i className="fa fa-heart" />
        <i className="fa fa-comment" />
        <span>{likes} likes</span>

        {comments.map((comment, i) => (
          <Comment username={comment.username} text={comment.text} key={i} /> // Mapping over the comments then rendering them.
        ))}

        <form onSubmit={this.addComment}>
          <input
            type="text"
            placeholder="Add a Comment"
            onChange={this.commentHandler} // This handles changing the state.
            value={this.state.comment} // This sets the value to the input.
          />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};

export default CommentSection;
