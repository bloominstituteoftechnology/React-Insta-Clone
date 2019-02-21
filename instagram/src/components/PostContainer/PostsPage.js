import React, { Component } from 'react';
import styled from 'styled-components';
import dummyData from './../../dummy-data.js';
import SearchBar from './../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import Authenticate from './../Authentication/Authenticate';

const AppStyle = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: auto;
	background: #b7b3a1;
`;

class PostsPage extends Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			searchInput: ''
		};
	}

	componentDidMount() {
		this.setState({ posts: dummyData });
	}

	handleChange = (event) => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSearch = (event) => {
		event.preventDefault();
		if (this.state.searchInput) {
			this.setState({
				posts: this.state.posts.filter((post) => {
					return post.username.includes(this.state.searchInput);
				}),
				searchInput: ''
			});
		} else {
			this.setState({
				posts: dummyData
			});
		}
	};

	render() {
		console.log(
			this.state.posts.filter((post) => {
				return post.username.includes(this.state.searchInput);
			})
		);
		return (
			<AppStyle>
				<SearchBar
					handleSearch={this.handleSearch}
					searchInput={this.state.searchInput}
					handleChange={this.handleChange}
				/>
				<PostContainer posts={this.state.posts} />
			</AppStyle>
		);
	}
}

export default Authenticate(PostsPage);
