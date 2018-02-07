import React from 'react';
import moment from 'moment';
import CommentSection from '../CommentSection/CommentSection';
import SearchBar from '../SearchBar/SearchBar';



class PostContainer extends React.Component {
	state = this.props;

	increaseLikes = (id) => {
		let temp = this.state.post;
		this.state.post.forEach((post) => {
	  	if(post.id === id){
	  		post.likes++;
	  	}	
		});
		this.setState({post: temp});

	}

	searchPost = (event)=>{
		this.setState({search: event.target.value, searching: 'searching...'});
	} 
	render(){
		console.log(this.state);
		let filteredPost = this.state.post;
		if(this.state.search){

				filteredPost = filteredPost.filter((post) => {

				return post.username.indexOf(this.state.search) !== -1;
			});
		}

		return ( 
			<div>
				<SearchBar searchPost={this.searchPost} searching={this.state.searching}/>
				{filteredPost.map((post)=>{
					return (
						<div key={post.id} className="post-container">

							<div className="username">
								 <i class="far fa-user-circle"></i> <span>{post.username}</span>
							</div>
							<div className="image">
								<img src={post.imageUrl} alt="img" />
							</div>
							<div className="heart">
								<span onClick={()=>{this.increaseLikes(post.id)}}>
								<i className="far fa-heart"></i></span> <i className="far fa-comment"></i>
							</div>							
							<div className="likes">
								{post.likes} Likes
							</div>

							<CommentSection comments={post.comments} />

							
							<div className="time">{moment().startOf(post.timestamp).fromNow()}</div>
						</div>
					);
				})
				}
			</div>
		);
	}
}

export default PostContainer;