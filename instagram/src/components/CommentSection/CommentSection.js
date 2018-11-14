import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";
import Comment from "./Comment";
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      comments: props.comments,
      inputText: "",
      index: props.comments.length
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  addNewComment = event => {
    event.preventDefault();
    if (this.state.inputText !== "") {
      let newComment = [
        ...this.state.comments,
        { text: this.state.inputText, username: "New User" }
      ];
      this.setState({
        comments: newComment,
        inputText: ""
      });
    }
  };
  render() {
    console.log(this.state.comments);
    console.log(this.state.inputText);
    console.log(this.state.index);
    return (
      <React.Fragment>
        {this.state.data.comments.map(item => {
          return <Comment key={`${item.username}${item.text}`} data={item} />;
        })}
        <div className="time">
          <p className="time-text">{this.state.data.timestamp}</p>
        </div>
        <form className="add-comment" onSubmit={this.addNewComment}>
          <input
            className="input-comment"
            placeholder="Add a comment..."
            type="text"
            name="inputText"
            value={this.state.inputText}
            onChange={this.handleChange}
          />
          <a href="">
            <i className="fas fa-ellipsis-h settings" />
          </a>
          <button type="submit">Add comment</button>
        </form>
      </React.Fragment>
    );
  }
}
CommentSection.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};
export default CommentSection;
