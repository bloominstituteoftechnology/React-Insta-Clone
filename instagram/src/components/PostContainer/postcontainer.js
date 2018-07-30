import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/commentsection'
import './postcontainer.css'
import SearchBar from '../SearchBar/searchbar';

const PostContainer = (props) => {
    return ( 
        <div>
            <SearchBar />
            <h2><img className="thumbnail-img" src={props.data.thumbnailUrl} alt=""/>{props.data.username}</h2>
            <img src={props.data.imageUrl} alt=""/>
            <CommentSection data={props.data}/>
        </div>
     );
}


 
export default PostContainer;