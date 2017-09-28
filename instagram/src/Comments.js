import React from 'react';

export const Comments = (props) => {
	return(
		<div>
			{console.log(props)}
			{props.comments.map((comment => {
				return (
					<div className='Comment-Wrapper'>
						<p>{comment.text}</p>
						<p>{comment.username}</p>
					</div>
				)
			}))
			}
		</div>
	)
}