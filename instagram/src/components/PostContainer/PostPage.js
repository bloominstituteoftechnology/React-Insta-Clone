import React from 'react';
import PropTypes from 'prop-types';
import dummyData from '../../data/dummy-data.js';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostPage extends React.Component {
	constructor() {
		super()
		this.state = {
			posts:[],
			filteredPosts:[]
		}
	}
	
	componentDidMount() {
	    this.setState({ posts: dummyData });
	}

	searchPostsHandler = e => {
	  	const posts = this.state.posts.filter( p => {
	    	if(p.username.includes(e.target.value)) {
	      		return p; 
	    	}
		});
		this.setState ({ filteredPosts: posts });
	}
		

	render(){

		return (
		    <div className="App">
		        <header className="App-header">
		            <div className = "search_bar">
		                <SearchBar 
		                    searchTerm = {this.state.searchTerm}
		                    searchPosts = {this.searchPostsHandler }/>
		            </div>
		        </header>

		        <div className ="content">

		          <PostContainer User ={
		              this.state.filteredPosts.length > 0
		              ? this.state.filteredPosts
		              : this.state.posts
		            }

		          />
	          </div>

		    </div>
		)
	}
}
export default PostPage;