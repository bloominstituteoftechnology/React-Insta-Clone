import React, { Component } from 'react';

class commentSection extends Component() {
  constructor() {
    super();
    this.state={
      comments: [],
    };
  }
  componentDidMount() {
    this.setState({ posts: this.props.commentSection, });
  }
  render() {
    return (
      <div>
        <input 
          type='text'
          value={ this.props.comment }
          onChange={ this.props.comment }
        />
      </div>
    );
  }
};

export default commentSection;