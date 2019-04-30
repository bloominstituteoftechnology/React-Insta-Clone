import "./Comment.css";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import Comment from './Comment'
import CommentInput from'./CommentInput'

class CommentSection extends Component {
  constructor(props) {
    super();
    this.state = {
      //set initial comment state to empty string 
      comments: props.comments, comment: ''
    };
  }
  //bind input to state 
  commentHandler = e => {
    this.setState({ comment: e.target.value });
  };

  AddComment = e => {
    e.preventDefault();
    
   const newComment = { text: this.state.comment }
   
    this.setState({
      comments: [...this.state.comments,newComment], comment:''
    }
    
    )
   
  };

  render() {
    return (
      <div>
       {this.state.comments.map((e, index) => <Comment key={index} comment={e} />)}
        <CommentInput comment={this.state.comment} submitComment={this.AddComment} changeComment={this.commentHandler}/>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};


export default CommentSection;

