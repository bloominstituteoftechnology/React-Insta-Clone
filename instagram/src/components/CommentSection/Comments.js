import React, { Component } from 'react';
import './Comment.css';


class Comments extends Component {
  state = {  }
  render() { 
    console.log(this.props.comments);
    return ( 
      <>
      {this.props.comments.map(comment =>{
        return[ 
        <p>{comment.username}</p>,
        <p>{comment.text}</p>
        ]
      })
      }
      </>
    );
  }
}
export default Comments;