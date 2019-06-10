import React from 'react';
import './PostContainer.css';
import CommentSection from './CommentSection';

function PostContainer(props) {
  return (
    <div>
      {
        props.profile.map(profile => (
          <div key={profile.id}>
            <div>
              <img src={profile.thumbnailUrl} alt={profile.name}/>
              <h3>{profile.username}</h3>
            </div>
            <div>
              <img src={profile.imageUrl} alt={profile.id}/>
            </div>
            {/* <CommentSection /> */}
          </div>
        ))
      }
    </div>
    );

}

export default PostContainer;
