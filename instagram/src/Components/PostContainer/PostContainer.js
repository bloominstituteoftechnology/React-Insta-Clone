import React from 'react';
import Post from './Post';

const PostContainer = (props) => {
	return <div>{props.posts.map((mustafa) => <Post key={mustafa.imageUrl} post={mustafa} />)}</div>;
};
export default PostContainer;
