import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import PostContainer from '../PostContainer/PostContainer'




class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentArray: props.comments,
      commentInput: ""
    };
  }
  handleEvent = event => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addComment = event => {
    event.preventDefault();
    const commentArray = this.state.commentArray.slice();
    commentArray.push({
      username: localStorage.getItem('user'),
      text: this.state.commentInput
    });
    this.setState({
      commentArray: commentArray,
      commentInput: ""
    })
    //const commentArray = {...this.state.commentArray} (Spread Operator)
  };

   // JSON.parse / stringify 
   // ComponentDidMount var that captures from local storage (getItem) & save to var if exsists set state if not then dummy data
  // set data to local storage

  render() {
    console.log(this.state)
    return (
      <div>
        {this.state.commentArray.map(comment => (
          <Comment key={comment.username} comment={comment} />
        ))}
        <CommentForm
          commentClicked={this.props.commentClicked}
          addComment={this.addComment}
          value={this.state.commentInput}
          handleEvent={this.handleEvent}
        />
      </div>
    );
  }
}

CommentSection.propTypes = { comments: PropTypes.array.isRequired };

export default CommentSection;
