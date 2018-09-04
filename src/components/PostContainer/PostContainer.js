import React from 'react';
import Post from './Post';

const PostContainer = (props) => {
  console.log(props);
   return(
     <div className="PostContainer">
{props.userData.map(userData => <Post userData={userData} />)}

     </div>

   )
}

export default PostContainer
