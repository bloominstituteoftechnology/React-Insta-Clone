import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'

const PostContainer = (props) => {
  return (
    <div>
      {props.dummyData.map( postObj => {
        return (
          <div>
            <div>{postObj.username}</div>
            <img src={postObj.thumbnailUrl} alt="avatar" width="100"></img>
            <img src={postObj.imageUrl} alt="imageURL" width="300"></img>
            <div>{postObj.likes}</div>
            <div>{postObj.timestamp}</div>

            <CommentSection comments={postObj.comments}/>
          </div>
        )
      })}
    </div>
  ) 
}

PostContainer.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.shape({
    thumbnailURL: PropTypes.string,
    imageURL: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      comment: PropTypes.string,
    })),
    username: PropTypes.string,
  })),
}


export default PostContainer;