import React, {Component} from 'react';

export default class CommentSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: this.props.post,
      comments: this.props.post.comments || [],
      newComment: ''
		};
	}

  componentDidMount() {
    this.setState({post: this.props.post, comments: this.props.post.comments});
  }

  handleTodoInput = (event) => {
    this.setState({ newComment: event.target.value }); // event listener and event.target.value = user input, setting it to newTodo
  };

  addComment = (event) => {
      event.preventDefault(); // prevents page from loading again
      const commentsList = this.props.post.comments;
      commentsList.push(this.state.newComment); // add new todo to todos array
      this.setState({ // change state and will call render function again
          newComment: '', // clear newtodo field
          comments: commentsList, // update array
      });
  };


  render () {
    console.log(this.state.comments);
    return (
      <div>
        <div>{this.state.post.username}</div>
        <div>{this.state.post.likes}</div>
        <div>{this.state.comments.map((comment, index) => {
          return <div key={index}>{comment.username}{comment.text}</div>
          })}</div>
        <form onSubmit={this.addComment}>
      <input type="text" onChange={this.handleTodoInput} placeholder="Add a comment" value={this.state.newComment} /> 
        </form>
    </div>
    )
  }

};