import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      currentUser: "leila100"
    }
  }

  addCommentHandler = (event) => {
    if(event.key === 'Enter' && event.target.value) {
      const newComment = {
        username: this.state.currentUser,
        text: event.target.value
      }
      this.setState(
        prevState => {
          const comments = prevState.comments.slice();
          comments.push(newComment);
          console.log(comments);
          return {comments: comments};
        }
      );
      event.target.value = "";
    }
  }

  render() {
    const d1 = moment(this.props.timestamp, 'MMM DD YYYY, HH:mm:ss a');
    return (
      <div className="commentSection">
        <div className="comments">{ this.state.comments.map(comment => <Comment comment={comment} key={comment.text} />) }</div>
        <Moment fromNow className="date">{d1}</Moment>
        <input type="text" placeholder="Add a comment..."  className="commentAdd" onKeyDown={this.addCommentHandler}/>
      </div>
    );  
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;