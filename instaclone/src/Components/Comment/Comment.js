import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <p><span>{this.props.username}</span>{this.props.text}</p>
          );
    }
}
 
export default Comment;