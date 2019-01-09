import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import "./Posts.css";

const Posts = props => {
  let arr = props.posts.map((post, i) => {
    return (
      post.username.includes(props.searchInput) && (
        <div className="post" key={`comment-${i}`}>
          <div className="post__header">
            <img className="post__profile" src={post.thumbnailUrl} alt="" />
            <div className="post__name">
              <span>{post.username}</span>
            </div>
          </div>
          <img className="post__image" src={post.imageUrl} alt="" />
          <div className="post__body">
            <div className="post__body__buttons">
              <div className="main--buttons">
                <i onClick={e => props.like(e, i)} className="far fa-heart" />
                <i className="far fa-comment" />
                <i className="far fa-share-square" />
              </div>
              <i className="far fa-bookmark" />
            </div>
            <span className="post__likes">{post.likes} likes</span>
            <CommentSection
              comments={props.comments[i]}
              time={post.timestamp}
            />
          </div>
        </div>
      )
    );
  });
  return <div className="posts">{arr}</div>;
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(PropTypes.object)
    })
  )
};

export default Posts;
