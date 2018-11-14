import React from 'react';
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";
import PropTypes from "prop-types";


const PostsPage = (props) => {
  return (
    <div>
        <SearchBar
          searchText={props.searchText}
          updateSearchText={props.updateSearchText}
          filterPosts={props.filterPosts}
          logout={props.logout}
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

PostsPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
    }))
  })),
  searchText: PropTypes.string,
  updateSearchText: PropTypes.func,
  logout: PropTypes.func,
  username: PropTypes.string,
  increaseLikes: PropTypes.func,
}

export default PostsPage;