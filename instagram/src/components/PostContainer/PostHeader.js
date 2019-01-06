import React from 'react';

const PostHeader = props => {
  	    return (
            <div class="postHeader">
               <img class="userThumbnail" src={props.thumbnail} />
               <p class="commentUser">{props.username}</p>
            </div>
          )}
export default PostHeader;
