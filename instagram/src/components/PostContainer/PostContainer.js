import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'

const PostContainer = props => {
    const {
        comments,
        imageUrl,
        username,
        likes,
        thumbnailUrl,
        timestamp
      } = props.postItems;

      let userImageStyle = {
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
      }
    return (
        <div className="postContainerDiv">
            <div className="userHeading">
                <img className="userImage" src={thumbnailUrl} alt="userlogo"/> 
                <p>{username}</p>
            </div>
        <div style={userImageStyle} className="imageURL"></div>
            <div className="iconContainer">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
            </div>
        <p>{likes} likes</p>
            {comments.map((item, index) => {
                return <CommentSection commentInfo={item} key={index}/>
            })}
        <div className="timeStamp">{timestamp}</div>
                <div className="newCommentDiv">
                    <input className="commentInput" placeholder="Add a comment..."></input>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
        </div>
    )
}

PostContainer.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }),
    timestamp: PropTypes.string,
    likes: PropTypes.number,
    imageUrl: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string
}

export default PostContainer;