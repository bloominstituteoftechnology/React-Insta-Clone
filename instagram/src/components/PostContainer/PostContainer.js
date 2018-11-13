import React from "react";
import PostContent from "../PostContent/PostContent";
import "./PostContainer.css";
import PropTypes from 'prop-types';

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.data.map(item => {
        return <PostContent key={item.username} data={item} />;
      })}
    </div>
  );
};

PostContainer.propTypes = {
    data: PropTypes.array.isRequired
};



export default PostContainer;
