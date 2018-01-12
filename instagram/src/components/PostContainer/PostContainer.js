import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import '../CommentSection/CommentSection.css';

const PostContainer = (props) => {
	return (
		<div className="PostContainer">
			{props.post.map((container => {
				return (
					<div className="PostContainer">
						<div className="PostContainer_header">
							<img className="PostContainer_thumbnailUrl" width="30" height="30" src={container.thumbnailUrl}/>
							<h4 className="PostContainer_username">{container.username}</h4>
						</div>

						<div className="PostContainer_image">
							<img className="PostContainer_imageUrl" src={container.imageUrl}/>
						</div>

						<div className="PostContainer_body">
							<div className="PostContainer_likesandcomments">
								<img className="PostContainer_likesUrl" width="27" height="15" src="https://imageog.flaticon.com/icons/png/512/14/14949.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"/>
								<img className="PostContainer_commentsUrl" width="17" height="15" src="https://png.icons8.com/ios/540//speech-bubble.png"/>
							</div>
							<div className="PostContainer_indications">
								<h4 className="PostContainer_likes">{container.likes} likes</h4>
							</div>
						</div>
						<CommentSection comments={container.comments}/>
						<p className="CommentSection_timestamp">6 MONTHS AGO</p>
					</div>
				);
			}))}
		</div>
	);
}

export default PostContainer;