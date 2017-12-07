import React, {Component} from 'react';

class CommentSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
      comments: [],
      newComment: ''
		};
	}

  componentDidMount() {
    this.setState({comments: this.props.comments});
  }

  handleCommentInput = (event) => {
    this.setState({ newComment: event.target.value }); // event listener and event.target.value = user input, setting it to newTodo
  };

  addComment = (event) => {
      event.preventDefault(); // prevents page from loading again
      const commentObj = {
          username: 'Jamie', // 
          text: this.state.newComment, // 
      };
      const commentArray = this.state.comments;
      commentArray.push(commentObj);
      this.setState({
        comments: commentArray,
        newComment: ''
      });
  }


  // render () {
  //   return (
  //     <div>
  //       <div>{this.state.post.username}</div>
  //       <div>{this.state.post.likes}</div>
  //       <div>{this.state.comments.map((comment, index) => {
  //         return <div key={index}>{comment.username}{comment.text}</div>
  //         })}</div>
  //       <form onSubmit={this.addComment}>
  //     <input type="text" onChange={this.handleTodoInput} placeholder="Add a comment" value={this.state.newComment} /> 
  //       </form>
  //   </div>
  //   )
  // }


  render () {
    return (
      <div className="comment-section">
        {this.state.comments.map((comment, i) => (
          <div className="comment" key={i}>
            <div className="comment-user"><strong>{comment.username}</strong></div>
            <div className="comment-text">{comment.text}</div>
          </div>
        ))}
        <div className="comment-input">
          <input type="text" placeholder="..." value={this.state.newcomment} onChange={this.handleCommentInput}/>
          <button type="submit" onClick={this.addComment}>Submit</button>
        </div>
      </div>
    );
  }

};


export default CommentSection;

