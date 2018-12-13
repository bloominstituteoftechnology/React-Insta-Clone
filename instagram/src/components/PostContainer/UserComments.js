import React from 'react';

const UserComments = props => {
	return (
		<div>
			<h3>{props.comUserName}:{props.comUserCom}</h3>

		</div>
	)
}

export default UserComments;