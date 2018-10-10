import React from 'react'
import SearchBar from '../SearchBar/searchbar';
import PostContainer from './postcontainer';

const PostPage = (props) => {
  
    return(
        <div className ="app-container">
            <div>
                <SearchBar />
            </div>    
            <div>
                {props.data.map(dummyObj =>{
                    return(
                        <PostContainer  dummyObj = {dummyObj} key = {dummyObj.timestamp}/>
                    );
                })}
            </div>
        </div>
    )
    
}

export default PostPage;