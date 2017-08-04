import React from 'react';
import LikeButton from './LikeButton';
import '../App.css';


export const PostContainer = ({ postData }) => {

  return (
    <ul>
        {postData.map((postData, i) => {
          return (
            <li className="Post-list" key={i}>
              <div className="Post">
                <div className="img-header">
                  <img src={postData.thumbnailUrl} className="User-icon"></img>
                  <p className="Username">{`${postData.username}`}</p>
                  <li className="more-btn"></li>
                </div>
                <div className="img-container">
                <img src={postData.imageUrl} className="User-photo"></img>
                </div>
                <div className="comments-div">
                  <li className="heart-btn"></li>
                  <li className="cmt-btn"></li>
                </div>
                <div className="likes-div">
                  <p className="Likes-p">{`${postData.likes}`}</p>
                  <p className="Comments">{`${postData.comments}`}</p>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};
