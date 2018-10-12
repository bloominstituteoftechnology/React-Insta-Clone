import React from 'react';
import SearchBarContainer from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import './PostContainer.css';

const PostsPage = (props) => (
      <div className="App">
        <header className="App-header">
        <SearchBarContainer handleChange = {props.handleChange} value ={props.value} search = {props.search}/>
         </header>
        <div className ='App-body'>
        {props.data.map((post, index) => {
         return <PostContainer key = {Math.random()} postIndex = {index} post = {post} />
        })}

       </div>
      
      </div>
);

export default PostsPage;