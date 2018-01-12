import React from 'react';
import Moment from 'react-moment';
import CommentSection from '../CommentSection/CommentSection';
import heartEmpty from './Assets/heart.png';
import heartLiked from './Assets/heart-liked.png';
import './PostContainer.css';

const PostContainer = (props) => {
  const post = props.postData;
  console.log(post.timestamp)
  const likeButtonClicked = () => {
    props.likePost(post.timestamp);
  }

  return (
    <div className="PostContainer">
      <div className="PostHeader">
        <img className="PostHeader__thumbnail" src={post.thumbnailUrl} alt={`${post.username}-thumbnail`} />
        <div className="PostHeader__username">{post.username}</div>
      </div>
      <div className="PostImage">
        <img className="PostImage__image" src={post.imageUrl} alt={`${post.username}-pic`} />
      </div>
      <div className="PostInteractionContainer">
        <button className="PostInteractionContainer__button-heart" onClick={likeButtonClicked}>
          <img src={props.isLiked ? heartLiked : heartEmpty} alt="heart-pic" />
        </button>
      </div>
      <div className="PostLikes">
        <div>{post.likes} likes</div>
      </div>
      <div className="PostCommentsContainer">
        <CommentSection comments={post.comments} updateComments={props.updateComments} id={post.timestamp}>
          <div><Moment to={props.timestampFormatted} /></div>
        </CommentSection>
      </div>

      <div className="PostFooter"></div>
    </div>
  )
}

export default PostContainer;