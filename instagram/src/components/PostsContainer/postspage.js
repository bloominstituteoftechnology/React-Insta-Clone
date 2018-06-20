import React from 'react';
import Posts from '../PostsContainer/posts';
import SearchBar from '../SearchBar/search.js';





const PostsPage = props => {
    return (
        <div className="App">
        <header className="App-header">
          
          <div className="App-title"><SearchBar /></div>
        </header>
        <div className="primary">
          {props.dummyData.map(post => (
              <Posts key={post.timestamp} dummyData={post} />
          ))}
        </div>
        
      </div>
    )
}
 
export default PostsPage;
 




