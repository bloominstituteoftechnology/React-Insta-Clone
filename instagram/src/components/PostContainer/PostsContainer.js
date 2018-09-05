import React from 'react';
import Post from './Post';
import './post.css';

const PostsContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </div>
  );
};


// const dummyData =[ {0} , {1} , {2} ]
//                    {p} , {p} , {p}

export default PostsContainer;