import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

export default function PostsPage({displayedData, searchFunc, addLike, addComment, removeComment, username}) {

  return (

    <>

      <SearchBar searchFunc={searchFunc}/>

      <div className='posts'>

        {displayedData.map((data, index) =>
          <PostContainer
            key={index}
            data={data}
            id={index}
            addLike={addLike}
            addComment={addComment}
            removeComment={removeComment}
            currentUser={username}
          />)}

      </div>

    </>

  );

}
