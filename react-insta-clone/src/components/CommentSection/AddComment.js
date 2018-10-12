import React, { Component } from 'react';


class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
          <div className="comment-section">
            <div className='comment-user'>
                {this.props.comment.username}
            </div>
            <div className='comment-text'>
                {this.props.comment.text}
            </div>
          </div>
        )
    }
}

export default AddComment;

