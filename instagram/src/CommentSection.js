import React, { Component } from 'react';
import './CommentSection.css';
import Moment from 'react-moment';

class CommentSection extends Component {
  constructor() {
    super();

    this.state = {
      comments: [],
      newComment: {username: "Nick", text: ""}
    };

    this.addComment = this.addComment.bind(this);
    this.handleNewComment = this.handleNewComment.bind(this);
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments
    });
  }

  addComment(event){
    event.preventDefault();    
    const comments = this.state.comments;
    comments.push(this.state.newComment);
    this.setState({comments: comments,
                  newComment: {username: "Nick", text: ""}});                  
  }

  handleNewComment(event) {
    this.setState({newComment: { text: event.target.value, username: "Nick" }})
  };

  render() {
    return (
      <div>
        {this.state.comments.map((comment, i) =>
          <div key={i}>
            <p> <span className="username"> {comment.username} </span>
                {comment.text}</p>
          </div>
        )}
        <span className="time">
          <Moment parse="MMMM Do YYYY, hh:mm:ss A" fromNow>
            {this.props.timestamp}
          </Moment>
        </span>
        <form onSubmit={this.addComment}>
           <input placeholder="Add a comment" className="form-control comment" onChange={this.handleNewComment} value={this.state.newComment.text} />
        </form>
      </div>
    );
  }
}

export default CommentSection;