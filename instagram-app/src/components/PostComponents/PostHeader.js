import React from 'react'
import { CardImg, CardTitle } from 'reactstrap'

const PostHeader = props => {
	return (
		<div className='post-header'>
            <CardImg
                alt={props.username}
                src={props.thumbnailUrl}
            />
			<CardTitle className='post-title'>{props.username}</CardTitle>
		</div>
	);
};

export default PostHeader;