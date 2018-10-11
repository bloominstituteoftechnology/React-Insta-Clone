import React from 'react';
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

const PostsPage = (props) => {
  return (
    <div>
        <SearchBar
          searchText={props.searchText}
          updateSearchText={props.updateSearchText}
        />
        <div className="Posts">
          {props.posts.map((post, idx) => (
            <PostContainer key={idx} post={post} />
          ))}
        </div>
</div>
  )
}

export default PostsPage;