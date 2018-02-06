import React from 'react';

class CommentSection extends React.Component {
  nextId = 1;
  state = {
    id: 0,
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
      id: this.getNextId(),
      username: this.state.username,
      text: this.state.newComment,
    };

    const updateCommentArr = this.state.comments;
    updateCommentArr.push(newComment);

    this.setState({
      comments: updateCommentArr,
      newComment: '',
    });
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
              <h4>{comment.username}</h4>
              <p>{comment.text}</p>
            </div>
          );
        })}
        <form onSubmit={this.addComment}>
        <input 
        type="text"
        value={this.state.newComment}
        onChange={this.updateNewComment}
        placeholder="Add comment" />
        </form>
      </div>
    )
  };
}

export default CommentSection;
