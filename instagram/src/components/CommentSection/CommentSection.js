import React, { Component } from 'react';
import PropTypes from 'prop-types';
import likes from "../../assets/likes.png"
import comment from "../../assets/comment.png"
import message from "../../assets/message.png"
import save from "../../assets/save.png"

import Comment from './Comment'
import TimeStamp from './TimeStamp'
import CommentInput from './CommentInput'


class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comment: "",
      likes: 0
    }
    console.log(this.state.comments);
  }

  componentDidMount(){
    this.setState({
      comments: this.props.comments,
      likes: this.props.likes
    })
  }

  updateComment = e => {
    this.setState({
      comment: e.target.value
    })
  }

  addNewComment = event => {
    event.preventDefault();
    if (this.state.comment) {
      let new_comments = [...this.state.comments, {username: 'ryan_hamblin', text: this.state.comment}]// text: e.target.innerText(o lo que sea), username: 'ryan hamblin'
      this.setState({
        comments: new_comments,
        comment: ""
      })
    }
  }

  addLikes = () => {
    let new_likes = this.state.likes +1
    this.setState({
      likes: new_likes
    })
  }



render() {
  console.log('comment');
  console.log(this.props);

  return (
    <div className="comment-section">

      <div className="interactions">
        <img className="likes" src={likes} onClick={this.addLikes}/>
        <img className="comment" src={comment}/>
        <img className="message" src={message} />
        <img className="save" src={save} />
      </div>
      <p className="likes-counter">{this.state.likes} likes</p>

      <div className="comments" >
      {this.state.comments.map(comment =>
        <Comment comment={comment} />)}
      </div>
      <TimeStamp time={this.props.time}/>
      <CommentInput addNewComment={this.addNewComment}
        comment={this.state.comment}
        updateComment={this.updateComment}
        />


    </div>
  )
}
}



CommentSection.propTypes = {
  comments: PropTypes.array
}




export default CommentSection
