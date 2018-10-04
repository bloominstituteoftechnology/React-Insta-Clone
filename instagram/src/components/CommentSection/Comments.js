import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Comment.css';


class Comments extends Component {
  state = {  }
  render() { 
    console.log(this.props.comments);
    return (
      <div className="comment">
      {this.props.comments.map(comment =>{
        return[ 
        <p key={comment.username}>{comment.username}<span>{comment.text}</span></p>
        ]
      })
      }
      </div>
    );
  }
}

Comments.propTypes = {
  comments:PropTypes.arrayOf(PropTypes.shape({
    username:PropTypes.string,
    text:PropTypes.string
  })).isRequired
};


export default Comments;