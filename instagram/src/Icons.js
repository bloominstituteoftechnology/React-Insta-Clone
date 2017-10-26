import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Heart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      loved: false,
    };
    this.name = props.name;
    this.props = props;
    this.toggleHover = this.toggleHover.bind(this);
    this.toggleLoved = this.toggleLoved.bind(this);
  }
  toggleHover() {
    this.setState({ hover: !(this.state.hover) });
  }
  toggleLoved() {
    this.setState({ loved: !(this.state.loved) });
    if (this.state.loved === true) {
      this.props.addLike('add');
    } else {
      this.props.addLike('remove');
    }
  }

  render() {
    return (
      <FontAwesome 
        name={ this.state.hover || this.state.loved ? 'heart' : 'heart-o'}
        size='2x'
        onMouseEnter={ this.toggleHover } 
        onMouseLeave={ this.toggleHover }
        onClick={ this.toggleLoved }
      />
    )
  }
}

export default Heart;