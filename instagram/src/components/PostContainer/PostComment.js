import React from 'react';

// components
import { UserName } from '../misc/UserName';

export const PostComment = props => {
  console.log(props);
  
  return (
    props.postCommentData.map(comment => {
      return (
        <div className={props.postCommentContainerClassName}>
          <UserName
            userNameClassName='font-weight-bold mr-2 postcontainer__comment__username'
            userName={ comment.username }
          />

          <p className={props.postCommentClassName}>
            {comment.text}
          </p>
        </div>
      )
    })
  );
}