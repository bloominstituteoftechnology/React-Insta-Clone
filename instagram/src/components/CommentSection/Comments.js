import React from "react";
import "./Comments.css";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  inputHandler = event => {
    this.setState({ inputText: event.target.value });
    //update props.state.inputText with text from input field
  };

  handleSubmit = event => {
    event.preventDefault();
    //this.props.createComment(this.state.inputText);
    console.log(this.state.inputText);
    this.setState({ inputText: "" });
    console.log(this.state.inputText);
  };

  render() {
    return (
      <div className="commentContainer">
        <input
          onSubmit={this.handleSubmit}
          type="text"
          placeholder="Add a comment..."
          value={this.state.inputText}
          onChange={this.inputHandler}
        />
        <i className="fas fa-ellipsis-h" />
      </div>
    );
  }
}
export default Comments;
