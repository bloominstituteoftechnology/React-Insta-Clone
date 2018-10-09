import React from 'react';
import PostIcons from './PostIcons';
import CommentSection from '../CommentSection/CommentSection';
import propTypes from 'prop-types';



 const PostContent = (props) => {

  return (

    <section className='post-content'>
      <PostIcons likes={props.likes}/>
      <CommentSection  comments={props.comments}/>
    </section>
  );
}
PostContent.propTypes = {
    likes: propTypes.number,
    comments: propTypes.array
  }
  
 export default PostContent;