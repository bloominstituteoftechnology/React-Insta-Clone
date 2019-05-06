import React from "react";
import PostContainer from "./PostContainer";

import PropTypes from "prop-types";

const PostList = props => {
  console.log(props);
  return (
    <div>
      {props.posts.map((posts, index) => (
        <PostContainer
          key={index}
          thumbnail={posts.thumbnailUrl}
          imageUrl={posts.imageUrl}
          username={posts.username}
          likes={posts.likes}
          comments={posts.comments}
        />
      ))}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string
    })
  )
}

export default PostList;
