import React, { Component } from 'react';
import '../../App.css';
import PropTypes from 'prop-types';

class CommentSection extends Component {
    constructor (props) {
      super (props)
      this.state = {
        comment: props.comment
        }
}


    addNewComment = (event, indNumber) => {
      return(this.setState({event: this.event,
                                indNumber: this.indNumber  }))
    }
  
    render = () => {
        console.log("Check: ", this.props )
      return (
        <div>
          <p>
            <span className="comment_username">{this.props.username}</span>
            <span className="comUser">{this.state.comment.username} </span>
            <span>{this.state.comment.text}</span> 
          </p>
        </div>
      )
    }
}

/*CommentSection.propTypes = {
    comment: PropTypes.objectOf(PropTypes.string).isRequired,
  }*/

export default CommentSection