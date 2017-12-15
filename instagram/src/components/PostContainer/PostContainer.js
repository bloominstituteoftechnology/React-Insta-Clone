import React, { Component } from 'react'


class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      stuff : []
    }
  }
  componentDidMount() {
    this.setState({stuff: this.props.data});
  }
  render() {
    return(
      <div>{this.state.stuff}</div>
    )
  }
}

export default PostContainer;