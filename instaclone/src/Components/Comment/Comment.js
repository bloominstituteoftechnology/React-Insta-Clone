import React, { Component } from 'react';
import './Comment.css'

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <p className="comment"><span className="user">{this.props.username}</span>{this.props.text}</p>
          );
    }
}
 
export default Comment;