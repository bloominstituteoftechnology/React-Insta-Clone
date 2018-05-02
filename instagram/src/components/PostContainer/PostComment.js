import React from 'react';

// components
import { UserName } from '../misc/UserName';

export const PostComment = props => {
  return (
    <div className={ props.postCommentContainerClassName }>
      <UserName/>

      <p className={ props.postCommentClassName }>
        { props.postComment }
      </p>
    </div>
    
  );
}