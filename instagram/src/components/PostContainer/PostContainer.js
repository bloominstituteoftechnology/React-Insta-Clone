import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection'

function PostContainer(props) {
  return (<div className="PC__container">
    <div className="container__top">
      <img className="container__top-img" src={props.postInfo.thumbnailUrl} alt="profile" />
      <div>{props.postInfo.username} ({props.postInfo.timestamp})</div>
    </div>
    <img className="container__middle" src={props.postInfo.imageUrl} alt="pickypick" />
    <div className="container__bottom">
      <button className="bottom__button bottom__button-left">Like</button>
      <button className="bottom__button bottom__button-right">Comments</button>
    </div>
    <div className="container__likes">
      <div>{props.postInfo.likes} people and/or bots liked this.</div>
    </div>
    <div className="container__comments">
      {props.postInfo.comments.map((comment, i) => {
        return <CommentSection key={'2'+i} commentInfo={comment} />
      })}
    </div>
  </div>);
}

export default PostContainer;