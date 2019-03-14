import React from 'react';

import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
    return (
      <div>
        <CommentSection comment={props.post.comments} />
      </div>
    );
}

export default PostContainer;