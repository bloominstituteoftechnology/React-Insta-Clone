import React, { Component } from 'react';
import Comment from '../CommentSection/CommentSection.js'
import './Post.css'
import PropTypes from 'prop-types';
import PostPages from './PostPages.js'
import Post from "./Post.js"
class PostContainer extends Component {
	constructor() {
		super()
	}
	
  render(){
		return(
			<div>
		      {this.props.data.map(data => (
			  <div className="postContainer">
			  	<Post 
				  key={Math.random()} 
				  username={data.username}
				  imageUrl={data.imageUrl}
				  thumbnailUrl={data.thumbnailUrl}
				/>
				<Comment 
				  key={Math.random()}
			      comments={data.comments}
				  likes={data.likes}
				  timestamp={data.timestamp}
			    />
			  </div>
			  ))}
		    </div>
	      );
        }
}

PostContainer.propTypes = {
		data: PropTypes.shape({
			username: PropTypes.string,
			thumbnailUrl: PropTypes.string,
			imageUrl: PropTypes.string,
			likes: PropTypes.string
		}),
	}
export default PostContainer;