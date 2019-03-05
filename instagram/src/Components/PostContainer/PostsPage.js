import React from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';
import dummyData from './dummy-data';

const PostPage = props => {
 return (
     <div className='postPage'>
        <SearchBar searchPosts={this.searchBarHandler}/>
        <PostContainer postData={
          this.state.searchData.length > 0 ?
          this.state.searchData :
          this.state.dummyData} />
        <dummyData /> 
     </div>
 )
}

export default PostPage;