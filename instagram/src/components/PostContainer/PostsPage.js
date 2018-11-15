import React, { Component } from 'react';
import dummyData from './../../dummy-data.js';
import SearchBar from './../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import Authenticate from './../Authentication/Authenticate';

class PostsPage extends Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			searchInput: '',
		};
  }
  
  componentDidMount(){
    this.setState({posts: dummyData})
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState ({
      [event.target.name]: event.target.value,
    })
  }

	handleSearch = (event) => {
    event.preventDefault();
    if (this.state.searchInput){
      this.setState({
        posts: 
        this.state.posts.filter((post) => {
        return post.username.includes(this.state.searchInput);
        }),
        searchInput: ''
      });
    } else {
      this.setState({
        posts: dummyData
      }) 
    }  
	};


	render() {
    console.log( this.state.posts.filter((post) => {
      return post.username.includes(this.state.searchInput);
      }))
		return (
			<div className="App">
        <SearchBar 
        handleSearch={this.handleSearch}
        searchInput={this.state.searchInput}
        handleChange={this.handleChange}
        />
				<PostContainer
					posts={this.state.posts}
				/>
			</div>
		);
	}
}

export default Authenticate(PostsPage);
