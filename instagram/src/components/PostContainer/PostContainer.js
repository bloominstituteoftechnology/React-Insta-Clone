import React, { Component } from 'react';
import Comment from '../CommentSection/CommentSection.js'
import './Post.css'
import dummyData from '../../dummy-data';


class PostContainer extends Component {
	constructor() {
		super()
		this.state = {
			data: dummyData
		}
	}
	
	
	

  render(){
		return(
			<div>
			  {this.state.data.map((data, index) =>(
			    <div className="postContainer">
                  <div className="postHeader">
					<img className="headerImg" src={data.thumbnailUrl} />
					<h1 className="headerText">{data.username}</h1>
				  </div>
				  <img className="postImg" src={data.imageUrl} />
				  <div className="bottomIcons">
				    <i class="far fa-heart fa-2x"></i>
				    <i class="far fa-comment fa-2x"></i>  
				  </div>
				  <div className="commentContainer">
				    <p><strong>200 likes</strong></p>
				    <Comment comment={data.comments} />
				    <span>{data.timestamp}</span>
				  </div>
					<input className="addComment" type="text" placeholder="Add a comment..."></input>
				</div>
			  ))}
		    </div>
		
		
	)
  }
}
export default PostContainer;