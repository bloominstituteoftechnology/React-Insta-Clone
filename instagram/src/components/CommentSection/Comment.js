import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledComment = styled.div`
  margin-left: 3.6%;  
`

class Comment extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() { 
    return ( 
      <StyledComment>
        <strong>{this.props.comments.username}</strong> {this.props.comments.text}
      </StyledComment>
     )
  }
}

Comment.propTypes = {
  comments:PropTypes.shape({
    username:PropTypes.string,
    text:PropTypes.string
  })
}
export default Comment;