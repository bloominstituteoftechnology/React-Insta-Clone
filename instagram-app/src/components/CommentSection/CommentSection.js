import React from 'react';
import './CommentSection.css';
import Comment from './Comment/Comment';
import moment from 'moment';

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
    const newComment = {text: this.state.comment, username: 'winniesongii'};
    if (this.state.comment !== ''){
      comments.push(newComment);
      this.setState({comments, comment: ''});
    }
  }

  // deleteComment = (id, index) => {
  //   this.setState((prevState) => {
  //   const newData = prevState.data;
  //   newData[index].comments = newData[index].comments.filter(x => x.id !== id);
  //     return {
  //       data: newData,
  //     };
  //   }, () => {
  //     localStorage.removeItem('data');
  //   });
  // }

  render() {
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

          {/* add ellipses image here */}
        </div>
      </div>
    )
  }
}

export default Comments;
