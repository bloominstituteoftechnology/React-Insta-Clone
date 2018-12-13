import React from 'react';
import Post from './Post';

const PostContainer = props => {
    return (
        props.posts.map(post => {
            console.log(post.comments);
            return(
                <div className="container">
                    <Post 
                    key={Math.random()} 
                    username={post.username}
                    thumbnailUrl={post.thumbnailUrl}
                    imageUrl={post.imageUrl}
                    likes={post.likes}
                    timestamp={post.timestamp}
                    comments={post.comments}
                    />
                    
                    
                </div>
            )
        })
    )

}

export default PostContainer;