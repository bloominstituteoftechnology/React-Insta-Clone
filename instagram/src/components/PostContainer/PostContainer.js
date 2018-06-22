import React, { Component } from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import Post from './Post';
import styled from 'styled-components'

const StyledPostContainer = styled.div`
  border: 1px solid lightgrey;
  margin: 40px 0;
  // -webkit-box-shadow: 2px 2px 12px 0px rgba(191,189,189,1);
  // -moz-box-shadow: 2px 2px 12px 0px rgba(191,189,189,1);
  // box-shadow: 2px 2px 12px 0px rgba(191,189,189,1);
  background-color:white;
`

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() { 
    return (
      <StyledPostContainer>
        <Post postObj = {this.props.postObj} updateLikes={this.props.updateLikes} postIndex={this.props.postIndex}/>
        <CommentSection 
          commentsArr={this.props.postObj.comments} 
          addNewComment={this.props.addNewComment} 
          postIndex={this.props.postIndex} 
          postTimeStamp={this.props.postObj.timestamp}/>
      </StyledPostContainer>
    )
  }
}

PostContainer.propTypes = {
  postObj:PropTypes.shape({
    username:PropTypes.string,
    thumbnailUrl:PropTypes.string,
    imageUrl:PropTypes.string,
    likes:PropTypes.number,
    timestamp:PropTypes.string,
    comments:PropTypes.array
  })
}
export default PostContainer;

