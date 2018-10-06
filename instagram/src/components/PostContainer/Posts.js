import React from 'react';
import './PostContainer.css';


const Posts = (props) => {
    return (
        <div>
            <img src={props.thumbnail} alt=""/>
            <h3>{props.username}</h3>
        </div>
    );
};

export default Posts;