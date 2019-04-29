import React from "react";
import CommentSection from "./CommentSection";
import PropTypes from 'prop-types';

const Post = props => {
    return (
      <section>
        <div className="image">
          <img src={props.dummyData.imageUrl} alt="postImg"/>
        </div>
        <CommentSection key={props.likes} dummyData={props.dummyData} />
      </section>
    );
}

Post.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.PropTypes.number,
  timestamp: PropTypes.string,
  comments: PropTypes.object

};

export default Post;

