import React from 'react';
import { comment } from 'postcss';



const Post = props => {
    return (
        <div>
           <Postheader 
           username={props.post.username}
           thumbnailUrl={props.post.thumbnailUrl}/> 
           <img 
           alt="" 
           className=""
           src= {props.post.imageUrl}/>
           <Comment />
        </div>
    );
};

export default Post;