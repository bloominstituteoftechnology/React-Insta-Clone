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
      <div className="post-container">
        <Post postObj = {this.props.postObj} updateLikes={this.props.updateLikes} postIndex={this.props.postIndex}/>
        <CommentSection 
          commentsArr={this.props.postObj.comments} 
          addNewComment={this.props.addNewComment} 
          postIndex={this.props.postIndex} 
          postTimeStamp={this.props.postObj.timestamp}/>
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

