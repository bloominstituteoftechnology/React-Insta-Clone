import React from 'react'
import CommentSection from '../CommentSection/CommentSection'

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
                <i class="far fa-comment"></i>
            </div>
        <p>{likes} likes</p>
            {comments.map(item => {
                return <CommentSection commentInfo={item}/>
            })}
        <div className="timeStamp">{timestamp}</div>
                <div className="newCommentDiv">
                    <input className="commentInput" placeholder="Add a comment..."></input>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
        </div>
    )
}

export default PostContainer;