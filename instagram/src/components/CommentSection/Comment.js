import React from "react";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commentInput: ""
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments
    });
    console.log(this.state.comment);
  }

  formChange = e => {
    this.setState({
      commentInput: e.target.value
    });
  };

  // add new comment
  addNewComment = e => {
    e.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          username: "Username",
          text: this.state.commentInput
        }
      ],
      commentInput: ""
    });
  };

  render() {
    console.log(this.props.comments);
    return (
      <div className="post-comment-container">
        <div className="comment-icons">
          <i className="far fa-heart" />
          <i className="far fa-comment" />
          <i className="far fa-share-square" />
        </div>
        <div className="comments">
          <div className="likes">
            {this.props.likes} <span>likes</span>
          </div>
          <div className="post-comments">
            {this.state.comments.map((comment, i) => (
              <div key={i}>
                <span>{comment.username}</span>
                <span>{comment.text}</span>
              </div>
            ))}
          </div>
          <div className="comment-form">
            <form onSubmit={this.addNewComment}>
              <input
                type="text"
                placeholder="Add a comment..."
                onChange={this.formChange}
                value={this.state.commentInput}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
