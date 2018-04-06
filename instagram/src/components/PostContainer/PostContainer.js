import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const PostContainer = props => {
	// alert('made it!');
	// console.log('dummy datalist: ', props.dummy);
  return (
  	<div className="postWrapper">
  		{props.dummy.map((post, index) => 		
				<Card>
					<CardImg className="cardImg" src={post.imageUrl} placeholder={post.username}/> 
	  			<h1>{post.username}</h1>
					<CommentSection key={index} commentList={post.comments} />
				</Card>
  		)}
  	</div>
  );
}

export default PostContainer;
