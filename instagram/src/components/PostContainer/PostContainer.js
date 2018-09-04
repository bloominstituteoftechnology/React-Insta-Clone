import React from "react";
import PostContent from "../PostContent/PostContent";

const PostContainer = ({
  list,
  inputName,
  textOnProps,
  handleInputOnProps,
  clickSubmitComment
}) => {
  return (
    <div className="post-container">
      {list.map((item, i) => {
        return (
          <PostContent
            key={i}
            username={list[i].username}
            thumbnailUrl={list[i].thumbnailUrl}
            imageUrl={list[i].imageUrl}
            likes={list[i].likes}
            timestamp={list[i].timestamp}
            comments={list[i].comments}
            inputName={inputName}
            textOnProps={textOnProps}
            handleInputOnProps={handleInputOnProps}
            clickSubmitComment={clickSubmitComment}
          />
        );
      })}
    </div>
  );
};

export default PostContainer;
