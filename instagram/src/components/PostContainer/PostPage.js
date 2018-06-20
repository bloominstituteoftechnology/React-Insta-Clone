import React from "react";
import PostContainer from "./PostContainer";

const PostPage = props => {
  return(
    <div>
      <PostContainer dummyData={props.dummyData} key={Math.random}/>
    </div>
  )
}

export default PostPage;
