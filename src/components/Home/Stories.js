import React from "react";

const Stories = props => {
  return (
    <>
      <div className="stories">
        <div className="stories-header">
          <small>Stories</small>
          <h1>Watch All</h1>
        </div>
        <div className="stories-content" />
      </div>
      <div className="suggestions">
        <div className="suggestions-header">
          <small>Suggestions For You</small>
          <h1>See All</h1>
        </div>
        <div className="suggestions-content" />
      </div>
    </>
  );
};

export default Stories;
