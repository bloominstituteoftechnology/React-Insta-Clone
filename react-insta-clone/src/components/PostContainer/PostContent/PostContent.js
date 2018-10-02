import React from 'react';
import PostIcons from './PostIcons/PostIcons';
import CommentSection from './CmentSection/CommentSection';

const PostContent = (props) => {
  return (
    <section className='post-content'>
      <PostIcons likes={props.likes}/>
      <CommentSection comments={props.comments}/>
    </section>
  );
}

export default PostContent;
