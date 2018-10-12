import React from 'react';
import PostContent from '../PostContent/PostContent.js'
import CommentSection from '../CommentSection/CommentSection.js'

const PostInstance= props => {
  return (
    <div id="postInstance">
      PostInstance
        <PostContent></PostContent>
        <CommentSection></CommentSection>
    </div>
  );
};

export default PostInstance;
