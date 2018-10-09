import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'

const PostContainer = (props) => {
  return (
    <div>
      {props.dummyData.map( postObj => {
        return (
          <div>
            <h3>{postObj.username}</h3>
            <img src={postObj.thumbnailURL} alt="avatar"></img>
            <img src={postObj.imageURL} alt="imageURL"></img>
            <h3>{postObj.likes}</h3>
            <h3>{postObj.timestamp}</h3>

            <CommentSection dummyData={props.dummyData.comments}/>
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