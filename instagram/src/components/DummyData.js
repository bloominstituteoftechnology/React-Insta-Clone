import React from 'react';
import Post from './Post';
import CommentSection from './CommentSection/commentSection';


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