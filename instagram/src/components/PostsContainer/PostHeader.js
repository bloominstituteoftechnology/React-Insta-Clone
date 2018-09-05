import React from 'react';

 function PostHeader(props) {
    return (
        <div className="post-header">
            <div className="post-thumbnail">
                <img src={props.thumbnailUrl} alt="post header" className="post-thumb" />
            </div>
            <div className="username">
              <p>{props.username}</p>
            </div>
        </div>
    );
};
 export default PostHeader;