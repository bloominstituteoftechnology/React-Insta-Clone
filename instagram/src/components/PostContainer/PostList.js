import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import './posts.css';


const PostList = (props) => {
	return (
		<div>														
			<div>{props.dataList.map((post) => <Post post={post} key={post.id} id={post.id} UP={props.upLikes} />)}</div>
		</div>

	)
}

PostList.propTypes = {
	dataList: PropTypes.arrayOf(PropTypes.object)
}

export default PostList
