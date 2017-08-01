import React, { Component } from 'react';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      comment: {}
    };
  }
  componentDidMount() {
    this.setState({User: this.props.user});

  }
  render() {
    return (
      <div>{this.state.user.name}</div>
    )
  }
};
