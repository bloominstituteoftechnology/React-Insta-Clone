import React from 'react';

const Post = props => {
    return (
        <div>
            <div>
                <img src= {props.post.thumbnailUrl} alt = "user thumbnail" />
                <span>
                {props.post.username}
                </span>
           </div>
           <div>
                <img src = {props.post.imageUrl} alt = "user image" />
           </div>
           <div>
               {props.post.likes}
           </div>
        </div>
    )
}
 
export default Post;