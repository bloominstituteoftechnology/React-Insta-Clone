import React from 'react';

const Like = (props) => {
	return [
		<div className="like-section" key="likes-icons-container" onClick={props.likeCounter} />,
		<div className="like-section" key="likes-container">
			<div className="like-section-wrapper">{props.likes}</div>
		</div>
	];
};

export default Like;
