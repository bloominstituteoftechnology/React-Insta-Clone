import React from "react";
import "./Posts.css";
import Post from "./Post";
import PropTypes from "prop-types";

// we are passing down data from the parent state to this child component
// this child component takes a list of elements and renders a new Post component for each object in dummyData
// PostContainer is actually going to be mounting another Component Post for each item in our array

// p represents a 'post' ... for each post give me 
const PostContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}

    </div>
  );
};

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
};
  
  

export default PostContainer;
