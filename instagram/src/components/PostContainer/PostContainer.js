import React from "react";
import PostContent from "../PostContent/PostContent";

const PostContainer = ({ adcmt, icrmtv, list }) => {
  return (
    <div className="post-container">
      {list.map((item, i) => {
        return (
          <PostContent
            key={i}
            ixct={i}
            adcmt={adcmt}
            icrmtv={icrmtv}
            username={list[i].username}
            thumbnailUrl={list[i].thumbnailUrl}
            imageUrl={list[i].imageUrl}
            likes={list[i].likes}
            timestamp={list[i].timestamp}
            comments={list[i].comments}
          />
        );
      })}
    </div>
  );
};

export default PostContainer;
