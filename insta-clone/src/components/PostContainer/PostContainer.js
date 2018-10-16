import React from "react";
import Posts from './Posts'
import {PostContent } from "../Styles/StylePost";

const PostContainer = props => {
  return (
    //This is my Post Container for each post.
    <PostContent>
      {/* Created a post area to map each post */}
      {props.dummyData.map(data => (


        <Posts key={data.imgUrl} data={data} />

      ))}
    </PostContent>
  );
};

export default PostContainer;
