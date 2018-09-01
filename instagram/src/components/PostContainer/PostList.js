import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

const PostList = (props) => {
	return (
		<div>
			<div>{props.dataList.map((post) => <Post post={post} key={post.id}/>)}</div>
		</div>
	)
}

PostList.propTypes = {
	dataList: PropTypes.arrayOf(PropTypes.object)
}

export default PostList

// <div>{props.items.map(item => <Item key={item.name} item={item}/>)}</div>
