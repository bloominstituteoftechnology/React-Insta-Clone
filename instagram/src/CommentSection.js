import React, { Component } from 'react';
import './CommentSection.css';
import Moment from 'react-moment';

class CommentSection extends Component {
  constructor() {
    super();

    this.state = {
      comments: [],
      newComment: {
          username: "coleferg",
          text: ''
      }
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
    const comments2 = this.state.comments;
    const comment = this.state.newComment;
    comments2.push(comment);
    this.setState({
        comments: comments2,
        newComment: {
            username: 'coleferg',
            text: ''
        }
    })
  }
  
  handleNewComment(event) {
    this.setState({newComment: { username: 'coleferg', text: event.target.value }})
};


  render() {
    return (
      <div className='comment_section'>
        {this.state.comments.map((comment, i) =>
          <div key={i} className='comment'>
            <div><span className='username2'> {comment.username} </span>  {comment.text}</div>
          </div>
        )}
        <div className="timestamp">
            <Moment parse="MMMM Do YYYY, hh:mm:ss A" fromNow>
            {this.props.timestamp}
            </Moment>
        </div>
            <form onSubmit={this.addComment}>
                <input type='text' onChange={this.handleNewComment} placeholder="Add a comment" value={this.state.newComment.text}  className="comment"/>
            </form>
       </div>
    );
  }
} 

export default CommentSection;