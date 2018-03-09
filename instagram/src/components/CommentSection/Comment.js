import React, { Component } from 'react';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return <div onClick={this.handleClick}>{this.props.thing}</div>;
  }
}

export default Comment;
