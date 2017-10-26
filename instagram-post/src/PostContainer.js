import React  from 'react';
import './PostContainer.css';

const PostContainer = (props) => {
	return (
		<div>
			{props.appData.map((data) => {
				return (
					<div className="img-container">
						<div className="img-header">
							<img src={data.thumbnailUrl} alt={data.username} width="50" height="50"/>
							<h3>{data.username}</h3>
						</div>
						<img src={data.imageUrl} alt={data.username} width="550" height="550"/>
					</div>
				)
			})}
		</div>
	);
}

export default PostContainer;