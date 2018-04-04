import React, { Component } from 'react';

export class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {console.log(this.props.comments)}
      </div>
    )
  }
}
