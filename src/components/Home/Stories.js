import React from "react";
import { connect } from "react-redux";

const Stories = props => {
  console.log(props.posts);
  return (
    <>
      <div className="stories">
        <div className="stories-header">
          <small>Stories</small>
          <h1>Watch All</h1>
        </div>
        <div className="stories-content">
          {props.posts.map(post => {
            return (
              <div key={post._id} className="story">
                <img
                  src={post.imageUrl}
                  alt="Hamza Elkhoudiri"
                  className="rightImg"
                />
                <span className="sub_item">
                  <h4>{post.username}</h4>
                  <p>{post.timestamp}</p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="suggestions">
        <div className="suggestions-header">
          <small>Suggestions For You</small>
          <h1>See All</h1>
        </div>
        <div className="suggestions-content">
          {props.posts.map(post => {
            return (
              <div key={post._id} className="story">
                <img
                  src={post.thumbnailUrl}
                  alt="Hamza Elkhoudiri"
                  className="rightImg"
                />
                <span className="sub_item">
                  <h4>{post.username}</h4>
                </span>
                <span>
                  <a href="#">Follow</a>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  posts: state.Insta.data
});

export default connect(mapStateToProps)(Stories);
