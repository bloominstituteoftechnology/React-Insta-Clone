import React from 'react';


import './postcontainer.css';


const PostHeader = gram => {
    return (
        <div className="postHeader">
        Test
            <img src={grams.gram.thumbnailUrl}/>
            <p>{gram.username}</p>
        </div>
    );
};

export default PostHeader;