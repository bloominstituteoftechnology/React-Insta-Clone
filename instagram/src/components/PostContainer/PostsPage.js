import React, { Component } from 'react';
import '../../App.css'

import dummyData from '../../dummy-data';
import SearchContainer from '../SearchBar/SearchContainer'
import PostContainer from './PostContainer'

class PostsPage extends Component {
	constructor(){
		super();
		this.state = {
		  data: dummyData,
		}
	}
	
	  addComment =(postId, comment) =>{
			let data = this.state.data.slice();
			data = data.map(post => {
				if (postId === post.timestamp){
				post.comments.push({
					username: this.props.user.username,
					text: comment
				});
				}
				return post;
			})
			this.setState({data})
			}
			addLike =(postId) =>{
			let data = this.state.data.slice();
			data = data.map(post => {
				if(postId === post.timestamp){
				post.likes += 1;
				}
				return post;
			})
			this.setState({data});
	  }
	
	  handleSearch = (searchTerm) =>{
			let data = this.state.data.slice();
			if (searchTerm === ''){
				this.setState({data:dummyData})
				return null;
			}
			data = data.filter(post => {
				if (JSON.stringify(post).includes(searchTerm)){
				return post;
				} 
				return false;
			})
			if (data.length > 0){
				this.setState({data});
			} else {
				return null;
			}
	  }
	
	render() {
		return (
			<div className='container'>
				<SearchContainer user={this.props.user} logout={this.props.logout} handleSearch={this.handleSearch} />
				<PostContainer likeHandler={this.addLike} data={this.state.data} commentHandler={this.addComment}/>
			</div>
		);
	}
}

export default PostsPage;