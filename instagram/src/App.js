import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import data from './dummy-data';

class App extends Component {
	constructor() {
		super();
		this.state = {
			dummyData: [],
			newComment: '',
			value: '',
			user: 'User'
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ dummyData: data });
		}, 1000);
	}

	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	addNewComment = (timestamp) => {
		const user = this.state.user;

		let newComment = this.state.newComment;

		const iou = [
			...this.state.post.map((post) => {
				if (post.timestamp === timestamp) {
					const newComment = {
						username: this.state.user,
						comment: newComment
					};
					return { ...post, comments: [ ...post.coments, newComment ] };
				} else {
					return post;
				}
			})
		];
		this.setState({
			posts: iou
		});
	};
	// addNewComment = (event) => {
	// 	return (

	// 	)
	// };

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<SearchBar
						changeHandler={this.changeHandler}
						data={this.state.dummyData}
						value={this.state.searchterm}
						filterSearch={this.filterSearch}
						name="search"
					/>
				</header>
				<div className="mainContent">
					<PostContainer
						changeHander={this.addNewComment}
						value={this.state.value}
						dummyData={this.state.dummyData}
						key={this.state.timestamp}
						thumbnailUrl={this.state.thumbnailUrl}
						username={this.state.username}
						imageUrl={this.state.imageUrl}
						likes={this.state.likes}
						comments={this.state.comments}
					/>
				</div>
			</div>
		);
	}
}

export default App;
