import React from 'react';
import './container.css';
import heart from './images/heart.png';
import bubbles from './images/bubble.png';
//import comments from '../commentSection/commentSection'
//tomorrow, start building a comment section.
//on <comments />, remember to bind comments passed in as props
//make the comment input on comment section
//RIGHT NOW, PROGRAM WILL NOT RUN WITH LINE 5 ACTIVE
//comment section does not exist yet, needs created.

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
	<img src={heart} alt="like" className="icon"/>
	<img src={bubbles} alt="comment" className="icon"/>
	</div>
	<div className="likes">
	{value.likes} likes
	</div>
	
	</div>
</div>
)
)}
</div>
);
}

export default Container;