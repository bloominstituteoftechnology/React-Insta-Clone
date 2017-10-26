import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Icons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      loved: false,
    };
    this.name = props.name;
    this.props = props;
  }
  render() {
    return (
      <FontAwesome 
        name={ this.state.hover === true || this.state.loved === true ? `${this.name}` : `${this.name}-o`} 
        onMouseEnter={ () => {this.setState({ hover:true })} } 
        onMouseLeave={ () => {this.setState({ hover:false })} }
        onClick={ () => {
          this.setState({ loved: !(this.state.loved) });
          if (this.state.loved === true) {
            this.props.addLike('add');
          } else {
            this.props.addLike('remove');
          }
        }}
      />
    )
  }
}

export default Icons;