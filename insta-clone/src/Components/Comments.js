import React from "react";
import "./Card.css";

const Comments = ({ timestamp, comments }) => {
	return (
		<div className="Card__comments">
			<div className="Card__comment">
				<p>
					<span className="Card__comment--user">philzcoffee</span>
					We've got more than just delicious coffees to offer at our
					shops!
				</p>
			</div>
			<div className="Card__last-comment">{timestamp}</div>
		</div>
	);
};

export default Comments;
