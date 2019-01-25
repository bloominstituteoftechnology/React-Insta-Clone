import React from "react";
import Post from "./Post";
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
      <section className="postContainer">
        <div className="postUser">
          <img src={props.dummyData.thumbnailUrl} alt="userImg"/>
          <h3>{props.dummyData.username}</h3>
        </div>
        <Post key={(props.likes*2)} dummyData={props.dummyData} />
      </section>
    );
}

PostContainer.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.PropTypes.number,
  timestamp: PropTypes.string,
  comments: PropTypes.object
};

export default PostContainer;

