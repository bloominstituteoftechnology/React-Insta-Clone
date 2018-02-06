import React, { Component } from 'react';

class CommentSection extends Component {
  constructor(props) { //
    super();

    this.state = {
      username: 'Julian',
      comments: [],
      newCommentText: ''
    }
  }
  // constructor(props) {
  //    // know diff between binding here and using arrow()
  // }
  componentDidMount() {
    this.setState({
      comments: this.props.comments
    });
  }

  addComment = (e) => {
    e.preventDefault();
    const newComment = {
      username: this.state.username,
      text: this.state.newCommentText,
    };

    const updatedCommentArray = this.state.comments;
    updatedCommentArray.push(newComment);

    this.setState({
      comments: updatedCommentArray, // [...this.state.comments, newComment]
      newCommenttext: ''
    })
  }

  updateNewComment = (e) => {
    this.setState({
      newCommentText: e.target.value
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => {
          return (
            <div key={index}>
              <h3>{comment.username}</h3>
              <p>{comment.text}</p>
            </div>
          );
        })}

        <input
          type="text"
          value={this.state.newCommentText}
          onChange={this.updateNewComment}
          onKeyDown={this.addComment}
          placeholder="Add a comment..."
        ></input>
      </div>
    )
  };
}

export default CommentSection;