import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

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

	render(){
		return ( 
			<div>
				{this.state.post.map((post)=>{
					return (
						<div key={post.id} className="post-container">
							<div className="username">{post.username}</div>
							<img src="https://static-s.aa-cdn.net/img/gp/20600008182729/S6lDNmlqADCAddb_rsocOhC9sZJyp19_KlCG7xs8UY8Jrk1u8dYh8Dr0_Mt2Qdu8i2VN=w300" alt="img" />
							<div className="likes">{post.likes} Likes</div>
							<div className="increaseLikes" onClick={()=>{this.increaseLikes(post.id)}}>Increase Like!</div>
							<CommentSection comments={post.comments} />
							<div className="time">{post.timestamp}</div>
						</div>
					);
				})
				}
			</div>
		);
	}
}

export default PostContainer;