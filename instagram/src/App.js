import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './Components/PostsContainer/PostContainer';
import CommentSection from './Components/CommentSection /CommentSection';
console.log(dummyData);
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
				<PostContainer instaData={this.state.instaData} />
				<CommentSection comments={this.props.comments} />
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
