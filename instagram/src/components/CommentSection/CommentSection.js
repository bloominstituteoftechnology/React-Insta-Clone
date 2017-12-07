import React, { Component } from 'react';

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      newComment: ''
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments
    });
  }

  addComment = (e) => {
    e.preventDefault();
    const commentObj = {
      username: 'Sean Valdivia',
      text: this.state.newComment
    };
    this.setState({
      comments: [...this.state.comments, commentObj],
      newComment: ''
    });
  }

    handleCommentInput = (e) => {
      this.setState({ newComment: e.target.value });
    }

   
