import React, { Component } from 'react';
import dummyData from './dummy-data'
import PostContainer from "./components/PostContainer/PostContainer"
import CommentSection from "./components/CommentSection/CommentSection"
import SearchBar from "./components/SearchBar/SearchBar"
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import Authenticate from './components/Authenticate/Authenticate';



function App (){  
 return (
   <div className="App">    
    <PostPage/>
   </div>
            
    )    
}

export default Authenticate(App);
