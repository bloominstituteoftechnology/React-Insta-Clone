import React, { Component } from 'react';
import './less/App.less';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			commentInput: '',
			searchInput: '',
			username: 'cotikor'
		};
  }
  
  componentDidMount(){
    this.setState({posts: dummyData})
  }
  
	handleChange = (event) => {
		this.setState({
			commentInput: event.target.value
		});
	};

	handleSearch = (event) => {
		this.setState({
      searchInput: event.target.value,
      posts: 
      this.state.posts.filter((post) => {
      post.username.includes(event.target.value);
      }),
    });
	};

	addComment = (event) => {
		event.preventDefault();
		this.setState({
			posts: [
				...this.state.posts,
				{
					comments: {
						text: this.state.commentInput,
						username: this.state.username
					}
				}
			],
			commentInput: ''
		});
	};

	render() {
		return (
			<div className="App">
				<SearchBar 
        handleSearch={this.handleSearch}
        searchInput={this.state.searchInput}
        />

				<PostContainer
					posts={this.state.posts}
					AddComment={this.AddComment}
					commentInput={this.state.commentInput}
					handleChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default App;
