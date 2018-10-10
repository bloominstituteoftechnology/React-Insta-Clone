import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import Post from "../PostContainer/Post";
import Icons from "../Icons";

const PostContainer = props => {
 
  return (
    <div className="post">
      <div>
        {props.data.map(data => {
          return (
            <div key={data.timestamp}>
              <Post
                thumbnail={data.thumbnailUrl}
                image={data.imageUrl}
                username={data.username}
              />
              <Icons increment={props.increment} />
              <p className="likes"> {props.likes} likes</p>
              <div className="comments-container">
                <CommentSection comments={data.comments} />
              </div>
              <p className="time">{Math.round((Math.random() + 3))} HOURS AGO</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

PostContainer.propTypes = {
  data: PropTypes.array.isRequired
};

export default PostContainer;
