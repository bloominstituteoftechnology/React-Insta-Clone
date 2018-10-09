import React from 'react';
import Comment from "./Comment";

class CommentSection extends React.Component {
  state = {
    comments: [],
    newCommentText: "",
    likes: 0
  };

  componentDidMount() {
    this.setState({ comments: this.props.comments, likes: this.props.likes });
  }

  onChange = e => {
    this.setState({ newCommentText: e.target.value });
  };

  addComment = () => {
    const username = "Emmanuel";
    const text = this.state.newCommentText;
    this.setState({
      comments: [...this.state.comments, { username, text }],
      newCommentText: ""
    });
  };

  likePost = () => {
    this.setState({ likes: this.state.likes + 1 });
  };
  
  render() {
    return (
      <div className="comments-section">
        <button onClick={this.likePost}>Like</button>
        <strong style={{ paddingBottom: "5px" }}>
          {this.state.likes} likes
        </strong>
        {this.state.comments.map(comment => {
          return (
            <>
              <Comment comment={comment} />
            </>
          );
        })}
        <div>
          <input
            placeholder="Add a comment..."
            value={this.state.newCommentText}
            onChange={this.onChange}
          />
          <button onClick={this.addComment}>Add Comment</button>
        </div>
      </div>
    );
  }
}

export default CommentSection;
