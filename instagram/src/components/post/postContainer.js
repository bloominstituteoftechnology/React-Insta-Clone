import React from 'react';
import Post from './post';



const PostContainer = (props) => {
    return (
        <React.Fragment>
            {props.posts.map(post => (
                <div>
                    <Post userName={post} key={post.timestamp} />
                    
                </div>
            ))}
        </React.Fragment>
    );
}

export default PostContainer;