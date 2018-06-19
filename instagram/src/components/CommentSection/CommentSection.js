import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.dummyData,
      input: "",
      placeholder: "Add a Comment..."
    };
  }

  changeInput = event =>
    this.setState({
      input: event.target.value,
    });

  addNewComment = (event, i) => {
    event.preventDefault();
    const comments = this.state.comments.slice();
    comments.push({ text: this.state.input, username: "Bill" });
    this.setState({
      comments,
      input: "",
      
    });
  };

  render() {
    return (
      <div>
        {this.state.comments.map(comment => (
          <div className="user-comments" key={Math.random()}>
            <p className="comments-username">{comment.username} </p>
            <p className="comments-text">{comment.text} </p>
          </div>
        ))}
        <div className="comment-box">
          <form onSubmit={this.addNewComment}>
            <input
              onChange={this.changeInput}
              className="add-comment-box"
              type="text"
              placeholder={this.state.placeholder}
              value={this.state.input}
            />
          </form>
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;
