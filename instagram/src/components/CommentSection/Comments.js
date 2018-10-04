import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Comment.css';


class Comments extends Component {
  state = {  }
  render() { 
    console.log(this.props.comments);
    return ( 
      <>
      {this.props.comments.map(comment =>{
        return[ 
        <p>{comment.likes}</p>,
        <p key={comment.username}>{comment.username}</p>,
        <p>{comment.text}</p>
        ]
      })
      }
      </>
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