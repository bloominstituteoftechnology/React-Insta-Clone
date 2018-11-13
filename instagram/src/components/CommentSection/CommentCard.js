import React, {Component} from 'react';
import Comment from './Comment';
import './Comment.css';
import { PropTypes } from 'prop-types';
import CommentInput from './CommentInput';

let moment = require('moment');

// console.log("CARD PROPS", props)
class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      timestamp: props.timestamp,
      comment: ''
    }
  }

  // componentDidMount() {
  //   let storedComments = JSON.parse(localStorage.getItem('comments'));
  //   if(storedComments) {this.setState({ comments: storedComments})}
  // }


  addComment = e => {
    e.preventDefault();

    // let newComments = [...this.state.comments,
    //   {username: "Ghosty", text: this.state.comment}];
    //   localStorage.setItem('comments', JSON.stringify(newComments))

    console.log("add comment here");
    this.setState({
      comments: [...this.state.comments,
        {
          username: "Ghosty",
          text: this.state.comment,
        }],
        comment: '',
    })
  }

  handleChange = e => {
    // console.log("changing to: ", e.target.value);
    // console.log("changing input name: ", e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    })    
  }

  render () {
    console.log(this.state);
    
    return (
      <div className="comment-card">
        {this.state.comments.map(
          (comment, i) => <Comment
                            data={comment}
                            key= {i+1}
                          />
        )}
        {/* <p className="timestamp" >{this.state.timestamp}</p> */}
        <p className="timestamp" >{moment().format("MMMM Do YYYY, hh:mm a")}</p>
        <CommentInput 
          value={this.state.comment}
          addComment={this.addComment}
          handleChange={this.handleChange}
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
