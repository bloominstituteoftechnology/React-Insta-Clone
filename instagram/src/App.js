import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './Components/PostsContainer/PostContainer';
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
		return <PostContainer instaData={this.state.instaData} />;
	}
	// 	// return <PostContainer dummyData={this.state.dummyData} />;
	// }
}

// const CommentSection = (props) => {
// 	return <div>{props.item.comments.map((i) => <div key={i}> </div>)}</div>;
// };

export default App;
