import React from 'react';
import Post from './Post';
import './Posts.css';
 
function PostsContainer(props) {
    return (
            <div className="posts-container">
                {props.posts.filter(post => {
                return post.username.includes(props.searchTerm);
                 }).map(p => <Post key={p.imageUrl} post={p} />)}
            </div>
    );
};

 export default PostsContainer;
