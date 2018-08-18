import React from "react";
import PropTypes from "prop-types";
// styles
import "./PostContainer.css";
// components
import CommentSection from "../CommentSection/CommentSection";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const PostContainer = props => {
	return (
		<div className="postWrapper">
			{props.dummy.map((post, index) => (
				<Card className="card" key={index}>
					<div className="cardHeader">
						<img src={post.thumbnailUrl} alt="thumbnail logo" />
						<CardTitle key={index}>{post.username}</CardTitle>
					</div>
					<CardImg
						className="cardImg"
						src={post.imageUrl}
						placeholder={post.username}
					/>
					<CardBody className="cardBody">
						<div>
							{" "}
							<i className="far fa-heart" />
							<i className="far fa-comment" />
						</div>
						<div>
							<strong>{post.likes} likes</strong>
						</div>
						<CommentSection key={index} commentList={post.comments} />
					</CardBody>
				</Card>
			))}
		</div>
	);
};

PostContainer.propTypes = {
	dummy: PropTypes.array.isRequired
};

export default PostContainer;
