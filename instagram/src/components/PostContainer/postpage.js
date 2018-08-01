import React from 'react';
import PostContainer from '../PostContainer/postcontainer';
import SearchBar from '../SearchBar/searchbar';

const PostPage = (props) => {
    const userSearch = props.data.filter((data) => {
        return data.username.toLowerCase().indexOf(props.searchQuery.toLowerCase()) != -1   
      })
      return (
          
        <div className="App">
          <SearchBar 
            searchPosts={props.searchPostsHandler} 
            onChange={props.onChange}
          />
          {userSearch.map(item =>  <PostContainer data={item} key={item.timestamp}/>)}
        </div>
      );
}
 
export default PostPage;