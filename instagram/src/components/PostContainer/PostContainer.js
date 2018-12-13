import React from 'react';
import UserPosts from './UserTitle'


const PostContainer = props => {
	console.log(props);

	return (
		<div>
			<div className="user_title">
				{props.User.map( user => {
						return (
							<UserPosts key={user.timestamp}
							userPic = {user.thumbnailUrl}
							UserName = {user.username}
							UserPost = {user.imageUrl}
							UserLikes = {user.likes}/>
						)
					})
				}
			</div>
		</div>
	)
}

export default PostContainer;