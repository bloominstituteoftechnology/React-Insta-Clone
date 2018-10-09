import React from 'react';
import PostIcons from './PostIcons';
import CommentSection from '../CommentSection/CommentSection';
 const PostContent = (props) => {
  return (
    <section className='post-content'>
      <PostIcons likes={props.likes}/>
      <CommentSection  comments={props.comments}/>
    </section>
  );
}
 export default PostContent;