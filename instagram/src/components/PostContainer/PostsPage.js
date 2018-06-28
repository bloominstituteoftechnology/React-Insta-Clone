import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';


const PostsPage = props => {
    return (
        <div>
            <header className="App-header">
                <h1 className="App-title">IG APP CLONE</h1>
            </header>
            <SearchBar 
                searchFieldHandler = {props.searchFieldHandler}
                activeValue = {props.searchField}
                searchUsername = {props.searchUsername}
            />
            
            <PostContainer postData = {props.postData}/>  
        </div>
    );
}

export default PostsPage;