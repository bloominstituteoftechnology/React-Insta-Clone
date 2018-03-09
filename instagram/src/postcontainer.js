import React from 'react';
//import Comments from './comments.js';

export const Postcontainer = (props) => {
    return (
        <div className= 'Post-Wrapper'>
            {props.dummyData.map(post => {
                return (
                    <div key= {post.state}>
                        <p>{post.username}</p>
                        <p>{post.likes}</p>
                        <p>{post.timestamp}</p>             
                    </div>
                )
            })}
        </div>
    )
};
