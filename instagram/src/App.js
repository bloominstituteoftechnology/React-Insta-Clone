import React, { Component } from 'react';
import Authenticate from './Components/Authentication/Authentication';
// import PostPage from './Components/PostContainer/PostPage';
// import PostContainer from './Components/PostsContainer/PostContainer';
import Header from './Components/SearchBar /Header';

class App extends Component {
	constructor() {
		super();
		this.state = {
			// posts: [],
			// postsFilter: []
			valid: false
		};
	}
	// searchHandler = (event) => {
	// 	let p = this.state.posts.filter((post) => {
	// 		if (post.username.includes(event.target.value)) {
	// 			return post;
	// 		}
	// 	});
	// 	this.setState({ postsFilter: p });
	// };
	// componentDidMount() {
	// 	this.setState({ posts: dummyData });
	// }
	render() {
		return (
			<div>
				<header>
					<Header searchPosts={this.searchHandler} />
				</header>
				{/* <PostPage /> */}
				{/* <PostContainer posts={this.state.postsFilter.length > 0 ? this.state.postsFilter : this.state.posts} /> */}
			</div>
		);
	}
}

export default Authenticate(App);
