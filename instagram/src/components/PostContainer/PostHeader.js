import React from 'react';

const PostHeader = props => {
  return (
    <div className="post--header">
      <img
      className="user--avatar"
      src="https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg" alt="user's avatar"/>
      <p className="user--name">philzcoffee</p>
    </div>
  );
}

export default PostHeader;