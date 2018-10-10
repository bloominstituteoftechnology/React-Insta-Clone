import React from 'react';
import SearchBar from './components/SearchBar';
import PostsPage from './components/PostContainer/index.js';
// import PostContainer from './components/PostContainer';
import Authenticate from './components/Authentication';
import data from './dummy-data.js';
import './App.css';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}
	
	componentDidMount() {
		this.setState({ data: data});
	}
	
	filterPosts = (str) => {
		const filteredPosts = data.filter(post => post.username.includes(str));
		this.setState({ data: filteredPosts });
	};
	
	render() {
		return (
			<div className="main-container">
				<div className="App">
					<SearchBar filterPosts={this.filterPosts} />
					
						<div className='positioning-container'>
							<PostsPage data={this.state.data} />
							{/* <PostContainer data={this.state.data} /> */}
						</div>
				</div>
			</div>
		);
	}
}
Authenticate(App);

export default App;
