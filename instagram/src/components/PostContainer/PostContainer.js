import React from "react";
import Post from './Post';
import './Posts.css';

// const PostContainer = () => {
//     return (
//       <div>
//         {dummyData.map(dummy => {
//           return <div>{dummy.imageUrl}</div>;
//         })}
//       </div>
//     );
//   };

const PostContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </div>
  );
};

     
export default PostContainer;