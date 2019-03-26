import React, { Component } from "react";
import fuzzysearch from "fuzzysearch";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import dummy from "./dummy-data";
import PropTypes from "prop-types";
import styled from "styled-components";
import thumbnail from "./thumbnail.png";


const NewPostsInput = styled.input`
border:1px solid #dedede;
border-radius: 3px;
padding: 1rem 2rem;
display: block;
margin: 2rem auto;
width 90%;
max-width: 50rem;
`

class PostsPage extends Component {
	state = {
		data: [],
		searchTerm: "",
		thumbnailURL: "",
		newPostURL:""
	};

	componentDidMount() {
		const localData = JSON.parse(localStorage.getItem("persist-data"));
		if (localData) {
			this.setState({
				data: localData
			});
		} else {
			this.setState({
				data: dummy
			});
		}
	}

	updateLocalStorage = () =>
		localStorage.setItem("persist-data", JSON.stringify(this.state.data));

	handleAddComment = (id, comment) => {
		this.setState(
			prevState => ({
				data: prevState.data.map(post => {
					if (post.id === id) {
						return {
							...post,
							comments: [
								...post.comments,
								{
									username: localStorage.getItem('insta-user'),
									text: comment
								}
							]
						};
					} else {
						return post;
					}
				})
			}),
			this.updateLocalStorage
		);
	};

	handleDeleteComment = (id, commentToDelete) => {
		this.setState(
			prevState => ({
				data: prevState.data.map(post => {
					if (post.id === id) {
						return {
							...post,
							comments: post.comments.filter(
								comment =>
									JSON.stringify(comment) !==
									JSON.stringify(commentToDelete)
							)
						};
					} else {
						return post;
					}
				})
			}),
			this.updateLocalStorage
		);
	};

	handleToggleLike = (id, liked) =>
		this.setState(
			prevState => ({
				data: prevState.data.map(post => {
					if (post.id === id) {
						if (liked) {
							return {
								...post,
								likes: post.likes + 1,
								liked
							};
						} else {
							return {
								...post,
								likes: post.likes - 1,
								liked
							};
						}
					} else {
						return post;
					}
				})
			}),
			this.updateLocalStorage
		);

	handleSearch = searchTerm => this.setState({ searchTerm });

	handleNewPostChange = url => this.setState({ newPostURL :url});

	handleNewPostSubmit =() => {
		this.setState(prevState=>({
			data: [
				...prevState.data,
				{
					id: Date.now(),
					username: localStorage.getItem('insta-user'),
					thumbnailUrl: thumbnail,
					imageUrl: prevState.newPostURL,
					likes: 0,
					liked: false,
					timestamp: Date.now(),
					comments:[]

				}
			]
		}))
	}

	render() {
		return (
			<div className="App">
				<Header logoutProp={this.props.onLogOut} onSearch={this.handleSearch} />
				<NewPostsInput 
				onChange={e => this.handleNewPostChange(e.target.value)}
				onKeyDown={e => e.key === 'Enter' ?	this.handleNewPostSubmit() : null}
				value={this.state.newPostURL}
				type="text"
				placeholder="Enter the URL of an Image!"  />
				<section className="container App__cards-container">
					{this.state.data
						.filter(card =>
							fuzzysearch(this.state.searchTerm, card.username)
						)
						.map(card => (
							<Card
								key={card.id}
								{...card}
								onToggleLike={this.handleToggleLike}
								onDeleteComment={this.handleDeleteComment}
								onAddComment={this.handleAddComment}
							/>
						))}
				</section>
			</div>
		);
	}
}

PostsPage.propTypes = {
	onLogOut: PropTypes.func.isRequired,
}
export default PostsPage;
