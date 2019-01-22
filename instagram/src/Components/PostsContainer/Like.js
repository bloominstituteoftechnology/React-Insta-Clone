import React from 'react';

const Like = (props) => {
	return [
		<div>
			<div onClick={props.LikeCounter} />
			<div> {props.likes}</div>
		</div>
	];
};

export default Like;
