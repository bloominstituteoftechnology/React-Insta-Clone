import React from 'react';
import './CommentSection.css';

function CommentSection(props) {
  return (
    <div>
      {
        props.profile.map(profile => (
          <div key={profile.id}>
            <div>
              <p><strong>{profile.username}</strong></p>
              <p>{props.profile.}</p>
            </div>
            <form>
              test
            </form>
          </div>
        ))
      }
    </div>
    );

}

export default CommentSection;