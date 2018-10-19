import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import PostContainer from './PostContainer.js';


const PostsPage=(props)=>{
    return(
        <div className="App">
            <header>
    
    <SearchBar SBval={props.controlledSearch} onSearch={props.onSearch} onChange={props.onChange}/>
            </header>
    
            { <div>
            <PostContainer onClick={props.onClick} posts={props.posts} handleChange={props.handleChange} handleNew={props.handleNew} PCval={props.PCval}/>
                
            </div> }
          </div>
    )
    }

    export default PostsPage;