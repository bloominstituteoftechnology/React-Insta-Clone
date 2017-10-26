import React  from 'react';
import './PostContainer.css';

const PostContainer = (props) => {
	return (
		<div>
			{props.appData.map((data) => {
				return (
					<div><br/><br/>
						<div className="img-container">
							<div className="img-header">
								<img src={data.thumbnailUrl} alt={data.username} width="50" height="50"/>
								<h3>{data.username}</h3>
							</div>
							<img src={data.imageUrl} alt={data.username} width="550" height="550"/>
							<div className="img-caption">
								<div className="unicode-size">&#9825; &#128489;</div>
								<div>{data.likes} likes</div>
								<div className="comment-section">
									{data.comments.map((comment) => {
										return (
											<div>
												<div><b>{comment.username}</b> {comment.text}</div>
											</div>
										)
									})}
								</div>
								<br/>
								<div>{data.timestamp}</div>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	);
}

export default PostContainer;