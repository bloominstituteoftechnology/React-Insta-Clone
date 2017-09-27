import React from "react";
import PostComponent from "./PostComponent";
export const Comments = props => {
  return (
    <div>
      {props.postData.map((post, i) => {
        return <PostComponent key={i} post={post} />;
      })}
    </div>
  );
};
