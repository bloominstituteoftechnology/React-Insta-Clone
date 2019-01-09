import React from 'react';
import './Comments.css';
import Comment from './Comment';
import moment from 'moment';

class Comments extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      comments: props.comments,
      comment: ''
    }
  }

  commentHandleChange = e => {
    this.setState({comment: e.target.value})
  }

  addNewComment = (e) => {
    e.preventDefault();
    const comments = this.state.comments.slice();
    const newComment = {text: this.state.comment, username: 'dp_chua'};
    if (this.state.comment !== ''){
      comments.push(newComment);
      this.setState({comments, comment: ''});
    }
  }

  render(){
    const time = moment(this.props.time, "MMM Do YYYY, h:mm:ss a")
    const newTime= time.fromNow().toUpperCase();
    return(
      <div className="comments_container">
        {this.state.comments.map((comment, index) =>(
        <Comment
         key={index}
         comment={comment} />
      ))}
        <p className="time">{newTime}</p>
        <div className="comment_input_container">
          <form onSubmit={this.addNewComment}>
            <input
              className="comment_input"
              type="text"
              onChange={this.commentHandleChange}
              value={this.state.comment}
              placeholder="Add a comment..."/>
          </form>
          <img alt="more" src="./../img/more.png" />
        </div>
      </div>
    )
  }
}

export default Comments;
