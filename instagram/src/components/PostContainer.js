import React from 'react';
import '../App.css';

export const PostContainer = ({ postData }) => {

  return (
    <ul>
        {postData.map((postData, i) => {
          return (
            <li className="Post-list" key={i}>
              <div className="Post">
                <div className="img-header">
                  <img src={postData.thumbnailUrl} className="User-icon">{}</img>
                  <p className="Username">{`${postData.username}`}</p>
                </div>
                <div className="img-container">
                <img src={postData.imageUrl} className="User-photo"></img>
                </div>
                <div className="heart-message-icon">
                <a>
                <span className="Heart-btn" type="input"></span>
                </a>
                <button className="dm-btn" type="input">Dm</button>
                </div>
                <p className="Likes-p">{`${postData.likes}`}</p>
                <p className="Comments">{`${postData.comments.username}`}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
};
