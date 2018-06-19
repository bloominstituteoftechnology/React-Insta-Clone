import React from 'react';
import Post from './Post';

const Posts = props => {
return (
<div>{props.dummyData.map(post => (
<Post key={post.username}  post={post} />
))}
</div>
); 
};

export default Posts;