import React from 'react';

const UserComments = props => {
	// console.log(props)
	return (

		<div>
			<h3>{props.comment.username}:{props.comment.text}</h3>
		</div>

	)
}



export default UserComments;