import React, { Component } from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import Post from './Post';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() { 
    return (
      <div>
        <Post postObj = {this.props.postObj}/>
        <CommentSection commentsArr = {this.props.postObj.comments}/>
      </div>
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

