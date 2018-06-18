import React from 'react';
import PostContainer from './PostContainer/PostContainer';

const Posts = props => {
  return (
    <div>
      {props.userData.map(user => {
        return <PostContainer key={user.username} user={user} />
      })}
    </div>
  );
};

export default Posts;
