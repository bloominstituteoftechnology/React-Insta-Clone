import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './Components/PostsContainer/PostContainer';
import Header from './Components/SearchBar /Header';
// import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			instaData: dummyData
		};
	}
	render() {
		return (
			<div>
				<header>
					<Header />
				</header>
				<PostContainer instaData={this.state.instaData} />
			</div>
		);
	}
	// 	// return <PostContainer dummyData={this.state.dummyData} />;
	// }
}

// const CommentSection = (props) => {
// 	return <div>{props.item.comments.map((i) => <div key={i}> </div>)}</div>;
// };

export default App;
