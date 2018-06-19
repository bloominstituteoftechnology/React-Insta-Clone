import React from 'react';
import './comments.css';

const Comments = props => {
return(
	<div className="commentSection">
	{props.comments.map((value,index) => (
	<div key={Math.random(Date.now())} className="comment">
	<p className="user">{value.username}:</p><p>&nbsp;{value.text}</p> 
	</div>
	))
	}
	</div>
	);
}

export default Comments