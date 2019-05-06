import React from "react";

import PropTypes from "prop-types";

const CommentSection = props => {
  console.log(props);
  return (
    <div>
      {props.comments.map((post, index) => (
        <div key={index} className="commentSection">
          <strong className="username">{post.username}</strong>
          <p>{post.text}</p>
        </div>
      ))}

      <form>
        <input type="text" placeholder="comment" />
        <button>Post</button>
      </form>
    </div>
  );
};

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number,
            
        })
    )
}

export default CommentSection;
