import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      addCommentText: "", 
      currentUser: "leila100"
    }
  }

  componentDidMount() {
    this.setState({comments: this.props.comments});
  }

  addCommentHandler = (event) => {
    event.preventDefault();
    if(this.state.addCommentText !== "") {
      const newComment = {
        username: this.state.currentUser,
        text: this.state.addCommentText
      }
      this.setState(
        prevState => {
          const comments = prevState.comments.slice();
          comments.push(newComment);
          return {comments: comments, addCommentText: ""};
        }
      );      
    }
  }

  setCommentText = (event) => {
    this.setState({addCommentText: event.target.value});
  }

  deleteCommentHandler = (event, index) => {
    this.setState(
      prevState => {
        const comments = prevState.comments.filter((comment, i) => i !== index);
        return {comments: comments};
      }
    ); 
  }

  render() {
    const d1 = moment(this.props.timestamp, 'MMM DD YYYY, HH:mm:ss a');
    return (
      <div className="commentSection">
        <div className="comments">{ this.state.comments.map((comment, index) => {
          return (
            <div key={comment.text}>
              <FontAwesomeIcon
                icon={['fas', 'trash-alt']}
                size="lg"
                color= "red"
                className="postIcon"
                onClick={(event) => this.deleteCommentHandler(event, index)}
              />
              <Comment comment={comment} />
            </div>
          );
          })}
        </div>
        <Moment fromNow className="date">{d1}</Moment>
        <form onSubmit={this.addCommentHandler}>
          <input type="text" placeholder="Add a comment..."  className="commentAdd" onChange={this.setCommentText} value={this.state.addCommentText}/>
          <input type="submit" hidden />
        </form>
      </div>
    );  
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;