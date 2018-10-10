import React from 'react';
import PostContainer from './PostContainer.js';
import SearchBar from '../SearchBar/SearchBar.js';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import PropType from 'prop-types';


const PostsPage = (props) => {

    return (
        <div>
            <SearchBar searchInput={props.searchInput} 
                       filter={props.searchInputHandler}
                       logOut={props.logOut}/>
      <div className="container">
        
        {props.filteredList.length > 0 ? props.filteredList.map(post => {return <PostContainer dummyData={post}/> }) : 
        props.dummyData.map(post => {return <PostContainer dummyData={post} /> })}
        
      </div>

        </div>
    )

}

export default PostsPage;