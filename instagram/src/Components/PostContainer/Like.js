import React from 'react';

const Like = (props) => {
	return [
		<img
			src={'https://pngimage.net/wp-content/uploads/2018/06/instagram-heart-icon-png-5.png'}
			alt="#"
			className="like-section"
			key="likes-icons-container"
			onClick={props.likeCounter}
			// onClick={() => props.likeCounter}
		/>,
		<div className="like-section" key="likes-container">
			<div className="like-section-wrapper">{props.likes}</div>
		</div>
	];
};

export default Like;
