import React from 'react';
import React from '../components/PostContent/PostContent.js'
import React from '../components/CommentSection/CommentSection.js'

const PostInstance= props => {
  return [
    <div>
        <PostContent></PostContent>
        <CommentSection></CommentSection>
    </div>
  ];
};

export default PostInstance;
