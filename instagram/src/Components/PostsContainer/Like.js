import React from 'react';

const Like = (props) => {
	return [
		<div>
			<button onClick={props.LikeCounter} />
			{props.likes}
		</div>
	];
};

export default Like;
