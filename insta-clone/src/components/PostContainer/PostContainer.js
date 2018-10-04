import React from 'react';
import './PostContainer.css';
import Header from './Header';
import Body from './Body';


const PostContainer = (props) =>{
    return(
        <div>
            <Header />
            <Body />
        </div>
    );
};

export default PostContainer;