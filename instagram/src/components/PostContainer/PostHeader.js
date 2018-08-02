import React from 'react';


const PostHeader = props => {
  return(
    <div>
        <div>
        <img 
            alt="post header"
            className="post-thumb"
            src={props.thumbnailUrl}
            />
        </div>
        <div>{props.username}</div>
    </div>
   );
};


export default PostHeader;
