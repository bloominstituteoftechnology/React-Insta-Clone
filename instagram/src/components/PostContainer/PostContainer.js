import React from 'react';
import './PostContainer.css';

function PostContainer(props) {
  return (<div className="PC__container">
    <div className="container__top">
      <img className="container__top-img" src={props.postInfo.thumbnailUrl} alt="profile" />
      <div>{props.postInfo.username}</div>
    </div>
    <img className="container__middle" src={props.postInfo.imageUrl} alt="pickypick" />
    <div className="container__bottom">
      <button className="bottom__button bottom__button-left">Like</button>
      <button className="bottom__button bottom__button-right">Comments</button>
    </div>
    <div className="container__likes">
      <div></div>
    </div>
  </div>);
}

export default PostContainer;