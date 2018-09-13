import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import dummyData from '../../dummy-data';

export default class PostPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}

	componentDidMount() {
		this.setState({
			posts: dummyData
		});
	}

	search = user => {
		const posts = dummyData.filter(post => post.username.includes(user));
		this.setState({
			posts
		});
	};


	render() {
		return (
			<div className="App">
				<SearchBar search={this.search} />
				<PostContainer posts={this.state.posts} />
			</div>
		);
	}
}
