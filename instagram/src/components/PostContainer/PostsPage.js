import React, { useEffect, useState } from "react";
import useInput from "../Hooks/useInput";

import dummyData from "../../dummy-data";

import PostContainer from "../PostContainer/PostContainer";
import SearchBar from "../SearchBar/SearchBar";

const storage = JSON.parse(localStorage.getItem("posts"));
const initalState = !storage ? [] : storage;

const PostsPage = () => {
  const [postData, setPostData] = useState(initalState);
  const { value, changeHandler } = useInput("");

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("posts", JSON.stringify(dummyData));
      setPostData(JSON.parse(localStorage.getItem("posts")));
    }, 500);
  }, []);

  // Filter posts based on search term
  let filterSearch = postData.filter(
    post => post.username.indexOf(value) !== -1,
  );
  // Creates posts
  const posts = filterSearch.map((postInfo, index) => {
    return <PostContainer postInfo={postInfo} key={postInfo.timestamp} />;
  });

  if (!postData.length) return <h1 className="loadingScreen">Loading...</h1>;

  return (
    <div className="appContainer">
      <SearchBar search={value} searchHandler={changeHandler} />
      {posts}
    </div>
  );
};

export default PostsPage;
