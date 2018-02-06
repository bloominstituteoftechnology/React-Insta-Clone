import React from 'react';

class CommentSection extends React.Component {
  nextId = 1;
  state = {
    username: 'User',
    comments: [],
    newComment: '',
  };

  componentDidMount() {
    this.setState({
      comments: this.props.comments,
    })
  }

  getNextId = () => {
    return this.nextId++;
  }

  addComment = (event) => {
    event.preventDefault();
    const newComment = {
      username: this.state.username,
      text: this.state.newComment,
    }
  }

  updateNewComment = (event) => {
    this.setState({ newComment: event.target.value});
  }

  render() {
    return (
      <div className="CommentSection">
        {this.state.comments.map((comment, i) => {
          return (
            <div key={i}>
              <h3>{comment.username}</h3>
              <p>{comment.text}</p>
            </div>
          );
        })}

        <input 
        type="text"
        value={this.state.newComment}
        onChange={this.updateNewComment}
        onKeyDown={this.addComment}
        placeholder="Add comment" />
      </div>
    )
  };
}

export default CommentSection;
