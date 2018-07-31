import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import dummy from "./dummy-data";

class App extends Component {
	state = {
		data: [],
		searchTerm: ""
	};

	componentDidMount() {
		this.setState({
			data: dummy
		});
	}

	handleAddComment = (id, comment) => {
		this.setState(prevState => ({
			data: prevState.data.map(post => {
				if (post.id === id) {
					return {
						...post,
						comments: [
							...post.comments,
							{
								username: "anonymous",
								text: comment
							}
						]
					};
				} else {
					return post;
				}
			})
		}));
	};

	handleToggleLike = (id, liked ) =>
		this.setState(prevState => ({
			data: prevState.data.map(post => {
				if (post.id === id) {
					if (liked) {
						return {
							...post,
							likes: post.likes + 1,
							liked
						};
					} else{
						return {
							...post,
							likes: post.likes -1,
							liked
						}
					}
				} else {
					return post;
				}
			})
		}));

	handleSearch = searchTerm => this.setState({ searchTerm });

	render() {
		console.log(this.state.data);
		return (
			<div className="App">
				<Header onSearch={this.handleSearch} />
				<section className="container App__cards-container">
					{this.state.data
						.filter(card =>
							card.username
								.toLowerCase()
								.includes(this.state.searchTerm.toLowerCase())
						)
						.map(card => (
							<Card
								key={card.id}
								{...card}
								onToggleLike={this.handleToggleLike}
								onAddComment={this.handleAddComment}
							/>
						))}
				</section>
			</div>
		);
	}
}

export default App;
