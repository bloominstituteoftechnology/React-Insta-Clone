import React from "react";


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentArray: props.commentInfo,
      commentInput: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewComment = (event, index) => {
    event.preventDefault();
    if (this.state.commentInput === "") {
      return null;
    }

    this.setState({
      commentArray: [
        ...this.state.commentArray,
        {
          username: "jordan",
          text: this.state.commentInput
        }
      ],
      commentInput: ""
    });
  };

  render() {
    return (
      <div className="commentDiv">
        {this.state.commentArray.map((item, index) => {
          return (
            <div className="postedCommentContainer">
              <h1 className="userName">{item.username}</h1>
              <p className="commentText">{item.text}</p>
            </div>
          );
        })}

        <div className="newCommentDiv">
          <form onSubmit={this.addNewComment}>
            <input
              className="commentInputField"
              placeholder="Add a comment..."
              type="text"
              value={this.state.commentInput}
              name="commentInput"
              onChange={this.changeHandler}
            />
            <i className="fas fa-ellipsis-h" />
          </form>
        </div>
      </div>
    );
  }
}

export default CommentSection;