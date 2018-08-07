import React, { Component } from 'react';

const PostHeader = props => {
    return (
        <div>
            <div>
                <img 
                    src= {props.thumbnailURL} 
                    alt= "post-header-image"
                 />
            </div>
            <div>{props.username}</div> 
        </div>
    );
};

export default PostHeader;