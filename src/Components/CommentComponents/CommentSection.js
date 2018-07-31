import React from 'react';
import PropTypes from 'prop-types';
import './comment.css';
import moment from 'moment';

import CommentDisplay from './CommentDisplay';

class CommentSection extends React.Component{
  constructor(props){
    super(props);
    this.state={
      comments: props.comments,
      time: props.timestamp,
      likes: props.likes,
      addingComment: false,
      liked: props.liked,
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    let newComments = this.state.comments.slice();
    newComments.push({
      username: 'Johanon',
      text: event.target.comment.value,
    });
    this.setState({
      comments: newComments,
      addingComment: false,
    });
  }

  handleLiking = () =>{
    let newNumber = this.state.likes + (this.state.liked ? -1 : 1);
    this.setState({
      likes: newNumber,
      liked: !this.state.liked,
    });
  }

  render(){
    let color = this.state.liked ? 'active' : '';
    return(
      <div className="comment-section">
        <div className="icon-bar">
          <i className={`far fa-heart icon ${color}`} onClick={this.handleLiking}></i>
          <i className="far fa-comment icon icon-flipped"></i>
        </div>
        <div className="likes"><strong>{this.state.likes} likes</strong></div>
        {this.state.comments.map(comment => <CommentDisplay comment={comment} />)}
        <div className="time">{moment(this.state.time, 'MMM Do YYYY h:mm:ss').fromNow()}</div>
        <hr className="dividing-line" />
        {this.state.addingComment ?
          <form onSubmit={this.handleSubmit}><input type="text" className="comment-box" name="comment" autoFocus /></form> :
          <div className="comment-add-text" onClick={()=> this.setState({addingComment: true})}>Add a comment...</div>}
      </div>
    )
  }
};

CommentSection.defaultProps = {
  liked: false,
}

CommentSection.propTypes = {
  likes: PropTypes.number,
  text: PropTypes.string,
  username: PropTypes.string,
  liked: PropTypes.boolean,
}

export default CommentSection;
