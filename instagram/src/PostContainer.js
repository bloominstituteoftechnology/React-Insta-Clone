import React from "react";
import CommentSection from "./CommentSection";
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
      <section className="postContainer">
        <div className="postUser">
          <img src={props.dummyData.thumbnailUrl} alt="userImg"/>
          <h3>{props.dummyData.username}</h3>
        </div>
        <div className="image">
          <img src={props.dummyData.imageUrl} alt="postImg"/>
        </div>
        <CommentSection key={props.likes} dummyData={props.dummyData} />
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

