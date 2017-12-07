import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Heart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      loved: false,
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.toggleLoved = this.toggleLoved.bind(this);
  }
  toggleHover() {
    this.setState({ hover: !(this.state.hover), });
  }
  toggleLoved() {
    this.setState(
      { loved: !(this.state.loved), },
      () => { this.props.addLike(this.state.loved) }
    );
  }

  render() {
    return (
      <FontAwesome 
        name={ this.state.hover || this.state.loved ? 'heart' : 'heart-o' }
        size='2x'
        onMouseEnter={ this.toggleHover } 
        onMouseLeave={ this.toggleHover }
        onClick={ this.toggleLoved }
      />
    )
  }
}

export default Heart;