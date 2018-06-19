import React from 'react';
import Post from './Post';


const DummyData = props => {
return (
<div>
{props.dummy.map(post => (
<Post key={post.username}  post={post} />
))}
</div>
); 
};

export default DummyData;