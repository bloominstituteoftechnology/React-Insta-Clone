import React, {Component} from 'react';
import Comment from './Comment';
import './Comment.css';
import { PropTypes } from 'prop-types';
import CommentInput from './CommentInput';

// console.log("CARD PROPS", props)
class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      timestamp: props.timestamp
    }
  }


  addComment = (e) => {
    e.preventDefault();
    console.log("add comment here");
  }


  render () {
    console.log(this.state);
    
    return (
      <div className="comment-card">
        {this.state.comments.map((comment, i) => <Comment data={comment} key= {i+1} />)}
        <p className="timestamp" >{this.state.timestamp}</p>
        <CommentInput 
          addComment={this.addComment}
        />
      </div>
    )
  }
}

CommentCard.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  )
}

export default CommentCard;
