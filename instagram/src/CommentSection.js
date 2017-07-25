import React, { Component } from 'react';

class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.setState({
      comments: ''
    });
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default CommentSection;
