import React from 'react';


import './postcontainer.css';


const PostHeader = props => {
    return (
        <div className="postHeader">
        Test
            <img src={props.thumbnailUrl}/>
            <p>{props.username}</p>
        </div>
    );
};

export default PostHeader;