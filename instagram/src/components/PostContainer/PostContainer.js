import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = (props) => {
  const post = props.postData;

  return (
    <ul className='PostContainer'>
      <li className='Post'>
        <div>
          <img src={post.thumbnailUrl} width='25px' alt='Avatar thumbnail' /> {post.username}
        </div>
        <div>
          <img src={post.imageUrl} alt='User content' />
        </div>
        {post.likes} likes, {post.timestamp}
        <CommentSection comments={post.comments} />
      </li>
    </ul>
  );
}

export default PostContainer;