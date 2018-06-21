import React from 'react';
import './container.css';
import Like from './like';
import bubbles from './images/bubble.png';
import Comments from '../commentSection/commentSection'


const Container = props => {
return (
<div className="posts">
{props.data.map((value,index) => (
<div key={Math.random(Date.now())} className="post">
	<div className="upper">
	<img src={value.thumbnailUrl} alt="" className="thumbNail"/>
	<p>{value.username}</p>
	</div>
	<div className="jumbotron">
	<img src={value.imageUrl} alt="posted image" className="postedImage"/>
	</div>
	<div className="lower">
	<div className="buttons">
	<Like 
	likeNumber={value.likes}
	/>
	<img src={bubbles} alt="comment" className="icon"/>
	</div>
	<div className="likes">
	{value.likes} likes
	</div>
	</div>
	<Comments
	comments={value.comments}
	/>
</div>
)
)}
</div>
);
}

export default Container;