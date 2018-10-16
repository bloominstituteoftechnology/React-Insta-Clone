import React, { Component } from "react";
import dummyData from '../../dummy-data.js'
import SearchBar from '../SearchBar/SearchBar.js'
import PostContainer from './PostContainer.js'
class PostPages extends Component {
	constructor() {
		super();
		this.state = {
			dummyData: [],
			search: ''
		}
	}
	
	componentDidMount() {
		this.setState({
			dummyData: dummyData
		});
	}
	
	handleInput = e => {
		this.setState ({
			search: e.target.value
		})
	}
	
	handleInputChange = e => {
		e.preventDefault(); 
		const filterPost = this.state.dummyData.filter(data => {
			if(data.username.includes(this.state.search)) {
				return data;
			}
		})
		this.setState ({
			dummyData: filterPost,
			search: ''
		})
	}
	
	render() { 
	  return(
	  	 <div>
		  <SearchBar 
			  input={this.state.search}
			  onChange={this.handleInput}
			  onSubmit={this.handleInputChange}
		  />
			  <div>
				  <PostContainer 
					  data={this.state.dummyData} 
				  />
			  </div>
		</div>
	  )
	}
	
}

export default PostPages;