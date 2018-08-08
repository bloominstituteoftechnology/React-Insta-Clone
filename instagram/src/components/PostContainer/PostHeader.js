import React from 'react';

const PostHeader = props => {
    return (
        <div>
            <div>
                <img 
                    src= {props.thumbnailUrl} 
                    alt= "post-header"
                 />
            </div>
            <div>{props.username}</div> 
        </div>
    );
};

export default PostHeader;