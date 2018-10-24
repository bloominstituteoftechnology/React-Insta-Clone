import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentSection extends Component {
    constructor (props) {
      super (props)
      this.state = {
        comment: props.comment
    }
  
    const addNewComment = () => {
      // logic goes
    }
  
    render = () => {
      return (
        <div>
          <p>
            <span className="comment_username">{props.comment.username}</span>
           {/* <span>{this.sate.comment.text}</span>*/}
           <CommentSection comment={this.state.comment.text} />
          </p>
        </div>
      )
    }
}
}

CommentSection.propTypes = {
    comment: PropTypes.objectOf(PropTypes.string).isRequired,
  }

export default CommentSection