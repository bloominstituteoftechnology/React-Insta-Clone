import React from 'react';
import SearchBarContainer from '../SearchBar/SearchBarContainer';
import PostContainer from './PostContainer';
import './post-container.css';

const PostsPage = (props) => (
      <div className="App">
        <header className="App-header">
        <SearchBarContainer handleChange = {props.handleChange} value ={props.value} search = {props.search}/>
         </header>
        <div className ='App-body'>
        {props.data.map(post => {
         return <PostContainer key = {Math.random()} post = {post} />
        })}

       </div>
      
      </div>
);

export default PostsPage;
