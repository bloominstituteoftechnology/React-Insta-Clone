import React from 'react';
import UserPosts from './UserPost'
import styled from 'styled-components'


const PostContainer = props => {
	// console.log(props);

	return (
		<div>
			<div className="user_title">
				{props.User.map( user => {
						return (
							<UserPosts key={user.imageUrl} user ={user}/>
						)
					})
				}
			</div>
		</div>
	)
}

export default PostContainer;