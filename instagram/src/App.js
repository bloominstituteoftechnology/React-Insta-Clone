import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
	constructor() {
		super();
		this.state = {
			post: [],
			filteredPosts: []
		};
	}

	componentDidMount() {
		this.setState({
			post: dummyData
		});
	}

	searchHandler = event => {
		const post = this.state.post.filter(post => {
			if (
				post.username.toLowerCase().includes(event.target.value.toLowerCase())
			) {
				return post;
			}
		});
		this.setState({ filteredPosts: post });
	};

	render() {
		return (
			<div className='App'>
				<SearchBar searchTerm={this.searchHandler} post={this.state.post} />

				<PostContainer
					post={
						this.state.filteredPosts.length > 0
							? this.state.filteredPosts
							: this.state.post
					}
				/>
			</div>
		);
	}
}

export default App;
