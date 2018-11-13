import React from 'react';

import Post from './post';

import './postcontainer.css';


const PostContainer = props => {
    return (
        <div className="post">
            {props.grams.map(g => <Post key={g.id} gram={g} />)} 
        </div>

    );
};

export default PostContainer;