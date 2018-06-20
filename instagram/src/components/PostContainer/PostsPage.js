import React from 'react';
import PostContainer from "../PostContainer/PostContainer";
import SearchBar from "../SearchBar/SearchBar";


const  PostPage = props => {
    return (
              <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <div>
          {props.dummyData.map(post => (
            <PostContainer key={post.timestamp} dummyData={post} />
          ))}
        </div>
      </div>
    );
  }
 
export default PostPage;