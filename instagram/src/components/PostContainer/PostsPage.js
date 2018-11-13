import React from 'react';
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

const LogoutButton = (props) => {
  return (
  <button onClick={props.logout}>Log Out {props.username} </button>
  )
}

const PostsPage = (props) => {
  return (
    <div>
      <LogoutButton logout={props.logout} username={props.username} />

        <SearchBar
          searchText={props.searchText}
          updateSearchText={props.updateSearchText}
        />
        <div className="Posts">
          {props.posts.map((post, idx) => (
            <PostContainer key={idx} 
            index={idx}
            post={post} 
            username={props.username}
            increaseLikes={props.increaseLikes}
            />
          ))}
        </div>
</div>
  )
}

export default PostsPage;