import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import Comments from './Comments';


class CommentContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    }
  }
  componentDidMount(){
    const id = this.props.ID;
    if(localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.ID))
      });
    } else {
      this.storeComments();
    }
  }

  componentWillUnmount(){
    this.storeComments();
  }

  storeComments = () => {
    localStorage.setItem(
      this.props.ID,
      JSON.stringify(this.state.comments)
    )
  }

  commentHandler = event => {
    this.setState({ comment: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    const newComment = { text: this.state.comment, username: 'trolldoll'};
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({
      comments,
      comment: ''
    });
    setTimeout(() => {
      this.storeComments();
    })
  }
  render(){
    return(
      <div>
        {this.state.comments.map((commentP) =>
          <Comments
            key={commentP.timestamp}
            comment={commentP}
          />)}
          <CommentInput
            comment={this.state.comment}
            change={this.commentHandler}
            submit={this.handleSubmit}
          />
      </div>
    );
  }
}

CommentContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentContainer;
