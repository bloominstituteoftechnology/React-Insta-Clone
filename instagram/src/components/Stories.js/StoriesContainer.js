import React from "react";
import "./Stories.css";

const Stories = props => {
  return (
    <div className="stories-container">
      <div className="stories-wrapper">
        <div className="stories-username">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxYR9TKfwwmN-iIOqTpJsz8wPnsaKlg6MnV9m2Nrs0BDg7J_-tA"
            alt="profile"
          />
          <h1>{localStorage.getItem("user")}</h1>
        </div>
        <div className="stories">
          <h5>Stories</h5>
          {props.posts.map(post => (
            <div className="stories-map" key={post.timestamp}>
              <div>
                <img src={post.thumbnailUrl} alt="" />
              </div>
              <div>
                <h1>{post.username}</h1>
                <p>30 MINUTES AGO</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
