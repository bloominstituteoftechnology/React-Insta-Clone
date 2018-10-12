import React from "react";
import './CommentSection.css'

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comm.comments,
      likes: props.comm.likes,
      timestamp: props.comm.timestamp,
      liked: false,
      input: ""
    };
  }

  toggleLikes = () => {
    let likesCopy = this.state.likes;

    if (this.state.liked === false) {
      likesCopy++;
      this.setState({ likes: likesCopy });
      this.setState({ liked: true });
    } else {
      likesCopy--;
      this.setState({ likes: likesCopy });
      this.setState({ liked: false });
    }
  };

  updateCommentField = event => {
    this.setState({ input: event.target.value });
  };

  submitNewComment = event => {
    event.preventDefault();
    const commentsCopy = this.state.comments.slice();
    commentsCopy.push({
      username: "jdfvr",
      text: this.state.input
    });
    this.setState({ comments: commentsCopy, input: "" });
  };

  render() {
    return (
      <div className='comments'>
        <div>
          <i className="far fa-comment" />
          <i onClick={this.toggleLikes} className={this.state.liked ? "fas fa-heart":"far fa-heart"} />
          <div>
            {this.state.comments.length} comments
          </div>
          <div>{this.state.likes} Likes</div>
          <div>
            {this.state.comments.map(item => (
              <div>
                <strong> {item.username} </strong>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <div>{this.state.timestamp}</div>
        <form onSubmit={this.submitNewComment} className="addComment">
          <input
            onChange={this.updateCommentField}
            type="text"
            name="commentField"
            placeholder="Add a comment"
            value={this.input}
          />
        </form>
      </div>
    );
  }
}

export default CommentSection;
