import React, { Component } from 'react';
import "./CommentSection.css";
import PropTypes from 'prop-types';


class CommentSection extends Component {

  constructor(props) {
    super(props);
    this.state ={
        comment: props.comment
    }
  }

  render() {
    return(
      <div>
        
        <span className="font-weight-bold">{this.state.comment.username} </span>
        <span> {this.state.comment.text}</span>
      </div>
    )
  }

}


CommentSection.propTypes = {
    comment: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
}

export default CommentSection;