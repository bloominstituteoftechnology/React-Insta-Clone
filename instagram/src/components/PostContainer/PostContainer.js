import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import heart from '../../heart.svg';
import convo from '../../convo.svg';
import './PostContainer.css'

const PostContainer = (props) => {
    return (
      <>
        {props.data.map(user => (
            <div className="postContainer">
                <div className="userInfo">
                    <img src={user.thumbnailUrl} width="50px" />
                    <h2>{user.username}</h2>
                </div>
                <img src={user.imageUrl} />
                <div className="icons">
                    <img src={heart} width="25px"/>
                    <img src={convo} width="25px"/>
                </div>
                <h2>{user.likes} likes</h2>
                <CommentSection 
                comment={user.comments}
                time={user.timestamp} />
                
           </div>
        ))}
      </>
    );
  };

  export default PostContainer;