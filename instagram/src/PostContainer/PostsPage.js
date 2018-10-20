import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';


const PostsPage = (props) => {
    return (
      <div>
          <SearchBar data={props.data}/>
          
          {props.data.map(item =>{
            return(
            <PostContainer obj={item} key={item.timestamp} />
            )
          })}
      </div>
    );
  }

export default PostsPage;
