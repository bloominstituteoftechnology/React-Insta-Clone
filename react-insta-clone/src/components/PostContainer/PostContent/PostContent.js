import React from 'react';
import PostIcons from './PostIcons/PostIcons';
import Comments from './Comments/Comments';

const PostContent = (props) => {
  return (
    <section className='post-content'>
      <PostIcons likes={props.likes}/>
      <Comments  comments={props.comments}/>
    </section>
  );
}

export default PostContent;
